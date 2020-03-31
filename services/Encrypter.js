const {
    upperCaseSegment,
    lowerCaseSegment,
    size
} = require('../config/const');
const isBetween = require('../helpers/isBetween');

class Encrypter {
    constructor(shift) {
        if (!shift) throw new Error('Missing Paramener: shift');

        this._shift = shift;
    }

    _checkRange(code) {
        return isBetween(code, ...upperCaseSegment) || isBetween(code, ...lowerCaseSegment)
    }

    decrypt(code) {
        if (!this._checkRange(code)) {
            return code;
        }

        const firstLetterCode = isBetween(code, ...upperCaseSegment) ?
            upperCaseSegment[0] :
            lowerCaseSegment[0];

        const shiftedCode = (code - firstLetterCode - this._shift) % size;

        return shiftedCode >= 0 
            ? shiftedCode + firstLetterCode 
            : shiftedCode + firstLetterCode + size;
    }

    encrypt(code) {
        if (!this._checkRange(code)) {
            return code;
        }

        const firstLetterCode = isBetween(code, ...upperCaseSegment) 
            ? upperCaseSegment[0] 
            : lowerCaseSegment[0];

        const shiftedCode = (code - firstLetterCode + this._shift) % size;

        return shiftedCode >= 0 
            ? shiftedCode + firstLetterCode 
            : shiftedCode + firstLetterCode + size;
    }
}

module.exports = Encrypter;