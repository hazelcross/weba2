
    import fs from "fs"
    import path from "path"

    let html = (() => {
        return "`" +  fs.readFileSync(("src/index.html"), "utf8") + "`";
    })()
    let template = (() => {
        return "`" + fs.readFileSync(("src/template.js"), "utf8") + "`";
    })()
    let loadScript = (() => {
        return fs.readFileSync(("src/loadscript.js"), "utf8");
    })()
    const anticache = (() => {
        const time = `${(new Date()).getTime()}`;
        return btoa(time);
    })();

    //import("minify/lib/js.js").then(module => module.default).then(async js => {
        const sourcecode = `${btoa(eval(template))}`;
        const htmldata = eval(html);

        fs.writeFileSync(("dist/index.html"), htmldata);
    //})
