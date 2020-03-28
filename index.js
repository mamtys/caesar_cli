const { pipeline } = require('stream');

const Encrypter = require('./services/Encrypter');
const EncodeStream = require('./services/EncodeStream');
const parseResult = require('./services/Parser');


const {action, outputStream = process.stdout, inputStream = process.stdin, shift} = parseResult;

const encoder = new Encrypter(shift);
const transformStream = new EncodeStream(encoder, action);


pipeline(
    inputStream, 
    transformStream, 
    outputStream, 
    (err) => {
        if (err) process.stderr('something went wrong \n', err);
    }
)

   