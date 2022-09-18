import fs from "fs";
import path from "path";
import * as u from "./u.mjs";

(function main() {
	u.log.info("Generating index.ts...");
	let now = new Date();
	let content = "";
	const files = fs.readdirSync(path.resolve(u.ROOT_DIR, "src"));
	for (const fileName of files)
		content += `export * from "./src/${fileName.split(".")[0]}";\n`;
	fs.writeFileSync(path.resolve(u.ROOT_DIR, "index.ts"), content);
	u.log.success(`Generated index.ts in ${(new Date() - now) / 1000}s`);
})();
