function writeError(message, code) {
    process.stderr.write(message, code);
    process.exit(-1)
}

module.exports = writeError;