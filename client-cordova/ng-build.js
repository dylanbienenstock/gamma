const path = require("path");
const execSync = require("child_process").execSync;

module.exports = function(context) {
	const target = "production";
	const environment = "cordova";
	const baseHref = ".";
	
	const basePath = context.opts.projectRoot;
	const clientPath = path.join(basePath, "../client");
	const outputPath = path.join(basePath, "/www");

	const command = [
		"ng build",
		// "--target=" + target,
		"--environment=" + environment,
		"--output-path " + outputPath,
		"--base-href " + baseHref
	].join(" ");

	console.log(command);

	console.log(execSync(command, {
		maxBuffer: 1024 * 1024,
		cwd: clientPath
	}).toString("utf8"));
};