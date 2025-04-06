{
    require("require-json5");

    const fs = require("fs"),
        path = require("path");

    let html = (() => {
        return "`" +  fs.readFileSync(path.resolve(__dirname + "/index.html"), "utf8") + "`";
    })()
    let template = (() => {
        return "`" + fs.readFileSync(path.resolve(__dirname + "/template.js"), "utf8") + "`";
    })()
    let loadScript = (() => {
        return fs.readFileSync(path.resolve(__dirname + "/loadscript.js"), "utf8");
    })()
    const anticache = (() => {
        const time = `${(new Date()).getTime()}`;
        return btoa(time);
    })();

    //import("minify/lib/js.js").then(module => module.default).then(async js => {
        const sourcecode = `${btoa(eval(template))}`;
        const htmldata = eval(html);

        fs.writeFileSync(path.resolve(__dirname + "/../dist/index.html"), htmldata);
    //})
}