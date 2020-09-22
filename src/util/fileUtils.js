'use strict';

let fs = require('fs');

class FileUtils {

    readFile(fileInputName) {
        let content = fs.readFileSync(fileInputName);
        return iconvlite.decode(content, 'latin1').toString();
    }

    writeFile(json, fileOutputName) {
        fs.writeFile(fileOutputName, json, function (err) {
            if (err) {
                throw err;
            } else {
                console.log('File saved: ' + fileOutputName);
            }
        });
    }
}
module.exports = new FileUtils();
