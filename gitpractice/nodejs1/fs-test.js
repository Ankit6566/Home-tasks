const fs = require('fs');
const fsPromise = require('fs').promises;
const crypto = require("crypto");

// fs.readFile("./server.js", (err, dataa) => {
//     if (err) {
//         console.log("error", err);
//         return;
//     }

//     console.log(dataa.toString());


// });
// console.log("i will execyte first");;


// const p = fsPromise.readFile("./server.js");

// p.then(data => {
//     console.log("im result", data.toString());
// });


// const response = fs.writeFileSync("./readme-new.md", "hello from new file");
// console.log(response);

// const res = fs.statSync("./readme-new.md");

// console.log(res.isFile());

const hash = crypto.createHash('sha1');
const hash5 = crypto.createHash('md5');
const filename = "node.js";
const input = fs.createReadStream(filename);
input.on('readable', () => {
    // Only one element is going to be produced by the
    // hash stream.
    const data = input.read();
    if (data) {
        hash.update(data);
        hash5.update(data);
    } else {
        console.log(`${hash.digest('hex')} ${hash5.digest('hex')} ${filename}`);
    }
});