const {program} = require('commander');
const fs = require('fs');
const path = require('path');
const appDir = path.dirname(require.main.filename)


program
    .requiredOption('-s, --shift <shift>', 'a shift')
    .option('-i, --input <input>', 'an input file')
    .option('-o, --output <output>', 'an output file')
    .requiredOption('-a, --action <actionType>', 'an action encode/decode')


program.parse(process.argv);


let action;
let outputStream;
let inputStream;
let shift;

if (program.shift) {
    shift = Number(program.shift);
}

if (program.action) {
    console.log(program.action);
    if (program.action != 'encrypt' && program.action != 'decrypt') {
        throw new Error('Wrong type: type should be encrypt or decrypt')
    }
    action = program.action;
}

if (program.output) {
    const filePath = path.resolve(appDir, program.output);

    outputStream = fs
        .createWriteStream(filePath)
        .on('error', err => {
            throw new Error(`Error ${err.message} occured at ${filePath}, make sure it's a proper file`)
        });
}

if (program.input) {
    const filePath = path.resolve(appDir, program.input);

    inputStream = fs
        .createReadStream(filePath)
        .on('error', err => {
            throw new Error(`Error ${err.message} occured at ${filePath}, make sure it's a proper file`)
        })
}



module.exports = {
    action,
    outputStream,
    inputStream,
    shift,
}