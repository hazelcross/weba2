
    import fs from "fs"
    import path from "path"
    
    const source = fs.readFileSync((process.argv[2]),"utf8");
    const sourceCode = `eval(atob("${btoa(source)}"));`;

    fs.writeFileSync((process.argv[3]), sourceCode);
    console.log("input:", process.argv[2], (source.length/1024).toFixed(2), "kb -> [base64:", (sourceCode.length/1024).toFixed(2), "kb]");
