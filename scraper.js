import fs from "fs";
import path from "path";
import process from "process";
import url from "url";
import chalk from "chalk";
import jsdom from "jsdom";
import fetch from "node-fetch";

const TYPE_MIME = "mime";
const URL_MIME = "https://www.iana.org/assignments/media-types/media-types.xhtml";
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async function main(...args) {
	const [type] = args;
	const now = new Date();
	switch (type) {
		case TYPE_MIME: {
			try {
				await generateMime();
			} catch (e) {
				logError(e.toString());
				process.exit(1);
			}
			break;
		};
		default: {
			logError(`Unknown task "${type}"`);
			process.exit(1);
		}
	}
	const seconds = (new Date() - now) / 1000;
	logSuccess(`Generated data for ${type} task in ${seconds}s`);
})(...process.argv.slice(2));

async function generateMime() {
	logInfo(`Accessing ${URL_MIME}...`);
	const html = await (await fetch(URL_MIME)).text();
	logInfo(`Parsing HTML...`);
	const dom = new jsdom.JSDOM(html);
	const baseDir = URL_MIME.endsWith("/") ? URL_MIME : URL_MIME.split("/").slice(0, -1).join("/") + "/";
	const downloadLinks = [...dom.window.document.querySelectorAll("a[href$=\".csv\"]")].map(a => baseDir + a.getAttribute("href"));
	if (!downloadLinks)
		throw new Error("No download links found");
	const result = {};
	for (const link of downloadLinks) {
		const categoryName = link.split("/").reverse()[0].split(".")[0];
		logInfo(`Retrieving CSV data from ${link}...`);
		const csvData = await (await fetch(link)).text();
		const lines = csvData.split(/[\r\n]+/).slice(1);
		const data = new Array(lines.length);
		for (let i = 0, ln = lines[i]; i < lines.length; i++, ln = lines[i]) {
			const [, mime] = ln.split(",");
			data[i] = mime;
		}
		result[categoryName] = data.filter(mime => mime);
	}
	logInfo("Generating MIME.ts...");
	let content = "";
	const typeNameArray = [];
	for (const [categoryName, data] of Object.entries(result)) {
		const typeName = `MIME${categoryName[0].toUpperCase()}${categoryName.substring(1)}`;
		typeNameArray.push(typeName);
		content += `export type ${typeName} = ${data.map(mime => `"${mime}"`).join(" | ")} | "${categoryName}/*";\n\n`;
	}
	content = `export type MIMEAll = ${typeNameArray.join(" | ")};\n\n` + content;
	fs.writeFileSync(path.resolve(__dirname, "src", "MIME.ts"), content);
}

function logError(msg) {
	console.log(chalk.red(`[ERROR]: ${msg}`));
}

function logInfo(msg) {
	console.log(`[INFO]: ${msg}`);
}

function logSuccess(msg) {
	console.log(chalk.green(`[SUCCESS]: ${msg}`));
}
