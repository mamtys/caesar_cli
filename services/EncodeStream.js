const { Transform } = require('stream');

class EncodeStream extends Transform {
    constructor(encoder, action) {
        if (!action) throw new Error('Missing Paramener: action');
        if (!encoder) throw new Error('Missing Paramener: encoder');
        
        super();
        this._encoder = encoder;
        this._action = action;
    }

    _transform(chunk, encoding, done) {
        this.push(chunk.map(el => this._encoder[this._action](el)));
        done();
    }
}

module.exports = EncodeStream;