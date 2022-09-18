import fs from "fs";
import path from "path";
import jsdom from "jsdom";
import fetch from "node-fetch";
import * as u from "./u.mjs";

const URL_MIME = "https://www.iana.org/assignments/media-types/media-types.xhtml";

(async function main() {
	const now = new Date();
	u.log.info(`Accessing ${URL_MIME}...`);
	const html = await (await fetch(URL_MIME)).text();
	u.log.info(`Parsing HTML...`);
	const dom = new jsdom.JSDOM(html);
	const baseDir = URL_MIME.endsWith("/") ? URL_MIME : URL_MIME.split("/").slice(0, -1).join("/") + "/";
	const downloadLinks = [...dom.window.document.querySelectorAll("a[href$=\".csv\"]")].map(a => baseDir + a.getAttribute("href"));
	if (!downloadLinks)
		throw new Error("No download links found");
	const result = {};
	for (const link of downloadLinks) {
		const categoryName = link.split("/").reverse()[0].split(".")[0];
		u.log.info(`Retrieving CSV data from ${link}...`);
		const csvData = await (await fetch(link)).text();
		const lines = csvData.split(/[\r\n]+/).slice(1);
		const data = new Array(lines.length);
		for (let i = 0, ln = lines[i]; i < lines.length; i++, ln = lines[i]) {
			const [, mime] = ln.split(",");
			data[i] = mime;
		}
		result[categoryName] = data.filter(mime => mime);
	}
	u.log.info("Generating MIME.ts...");
	let content = "";
	const typeNameArray = [];
	for (const [categoryName, data] of Object.entries(result)) {
		const typeName = `${categoryName[0].toUpperCase()}${categoryName.substring(1)}`;
		typeNameArray.push(typeName);
		content += `\texport type ${typeName} = ${data.map(mime => `"${mime}"`).join(" | ")} | "${categoryName}/*";\n\n`;
	}
	content = `export declare module mime {\n\n\texport type All = ${typeNameArray.join(" | ")};\n\n` + content + "}\n";
	fs.writeFileSync(path.resolve(u.ROOT_DIR, "src", "MIME.ts"), content);
	const seconds = (new Date() - now) / 1000;
	u.log.success(`Generated MIME.ts in ${seconds}s`);
})();
