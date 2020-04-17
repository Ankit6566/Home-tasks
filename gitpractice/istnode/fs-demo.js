const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const items = process.argv;
const dir = items[2];
const res = fs.statSync(dir);
if (res.isDirectory() != true) {
    console.log(new Error());
} else {
    const getAllFiles = function(dir, arrayOfFiles) {
        files = fs.readdirSync(dir);
        arrayOfFiles = arrayOfFiles || [];
        files.forEach(function(file) {
            if (fs.statSync(dir + "/" + file).isDirectory()) {
                arrayOfFiles = getAllFiles(dir + "/" + file, arrayOfFiles)
            } else {
                arrayOfFiles.push(path.join(__dirname, dir, "/", file))
            }
        })
        return arrayOfFiles;
    }
    arrayOfFiles = getAllFiles(dir);
    console.log(arrayOfFiles);
    for (i = 0; i < arrayOfFiles.length; i++) {
        console.log(fs.readFileSync(arrayOfFiles[i]).toString());
        const hash = crypto.createHash('sha1');
        const hash5 = crypto.createHash('md5');
        const filename = arrayOfFiles[i];
        const input = fs.createReadStream(filename);
        input.on('readable', () => {
            const data = input.read();
            if (data) {
                hash.update(data);
                hash5.update(data);
            } else {
                console.log(`${hash.digest('hex')} ${hash5.digest('hex')} ${filename}`);
            }
        });
    }
}