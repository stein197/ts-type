import fs from "fs";
import path from "path";
import url from "url";
import chalk from "chalk";

export const ROOT_DIR = (() => {
	let dir = path.dirname(url.fileURLToPath(import.meta.url));
	while (!fs.existsSync(path.resolve(dir, "package.json")))
		dir = path.dirname(dir);
	return dir;
})();

export const log = {
	info(msg) {
		console.log(`[INFO]: ${msg}`);
	},
	success(msg) {
		console.log(chalk.green(`[SUCCESS]: ${msg}`));
	}
}
