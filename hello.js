const build = require("./build/commonjs/index.js");
//global.Promise = require('bluebird')
const FuseBox = build.FuseBox;
const fs = require("fs");
//new build.BabelPlugin(),
//process.setMaxListeners(20);
let fuseBox = new FuseBox({
    homeDir: "test/fixtures/cases/ts",
    sourceMap: {
        bundleReference: "./sourcemaps.js.map",
        outFile: "sourcemaps.js.map",
    },
    cache: true,
    outFile: "./out.js",
    //modulesFolder: "test/fixtures/modules",
    //plugins: [build.HTMLPlugin, build.JSONPlugin, new build.CSSPlugin({ minify: true })]
});

fuseBox.bundle(">index.ts");