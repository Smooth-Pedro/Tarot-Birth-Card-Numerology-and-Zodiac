// Shim: run wrangler's cli.js under the Kimi node launcher, which rewrites
// process.argv[0] to Kimi.exe and breaks yargs ($0 detection). We normalize
// argv to a standard [node, script, ...args] layout and load cli.js as if it
// were the main module so its require.main guard fires.
const path = require("path");
const Module = require("module");

const cliPath =
	"C:/Users/pudlo/AppData/Local/npm-cache/_npx/32026684e21afda6/node_modules/wrangler/wrangler-dist/cli.js";

process.argv = ["node", cliPath, ...process.argv.slice(2)];
process.argv0 = "node";
// The Kimi launcher is Electron; yargs' isBundledElectronApp() then makes
// hideBin() slice only argv[0], leaking the script path into the parse.
// Marking it as the default (non-bundled) app restores normal slicing.
process.defaultApp = true;

const cliModule = new Module(cliPath, null);
cliModule.filename = cliPath;
cliModule.paths = Module._nodeModulePaths(path.dirname(cliPath));

// require.main is a getter returning process.mainModule — set that instead.
const origMain = process.mainModule;
process.mainModule = cliModule;
try {
	cliModule.load(cliPath);
} finally {
	process.mainModule = origMain;
}
