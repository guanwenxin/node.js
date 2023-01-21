const fs = require('node:fs')
const path = require('node:path')
const upload = path.join(__dirname, './upload/')

function saveFile(fileName) {
    const stm = fs.createWriteStream(`${upload}${path.sep}${fileName}`, {flags: 'w'})
    return stm;
}

// const a = saveFile('jpg')
// a.write('123')

module.exports = {
    saveFile
}