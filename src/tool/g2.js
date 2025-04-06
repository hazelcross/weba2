{
    const fs = require("fs"), path = require("path");
    const source = fs.readFileSync(path.resolve(__dirname + process.argv[2]),"utf8");
    const sourceCode = `eval(atob("${btoa(source)}"));`;

    fs.writeFileSync(path.resolve(__dirname + process.argv[3]), sourceCode);
    console.log("input:", process.argv[2], (source.length/1024).toFixed(2), "kb -> [base64:", (sourceCode.length/1024).toFixed(2), "kb]");
}