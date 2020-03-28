const { upperCaseSegment, lowerCaseSegment, size} = require('../config/const');

const _between = (el, start, end) => el <= end && el >= start;

class Encrypter {
    constructor(shift) {
        if (!shift) throw new Error('Missing Paramener: shift');
        
        this._shift = shift;
    }

    _checkRange(code){
        return _between(code, ...upperCaseSegment) || _between(code, ...lowerCaseSegment)
    }

    decrypt(code) {
        if (!this._checkRange(code)) {
            return code;
        }

        const firstLetterCode = _between(code, ...upperCaseSegment) 
            ? upperCaseSegment[0]
            : lowerCaseSegment[0];
            
        const shiftedCode = (code - firstLetterCode - this._shift) % size;

        return shiftedCode >= 0 ? shiftedCode + firstLetterCode : shiftedCode + firstLetterCode + size;
    }

    encrypt(code) {
        if (!this._checkRange(code)) {
            return code;
        }

        const firstLetterCode = _between(code, ...upperCaseSegment) 
            ? upperCaseSegment[0]
            : lowerCaseSegment[0];
            
        const shiftedCode = (code - firstLetterCode + this._shift) % size;

        return shiftedCode >= 0 ? shiftedCode + firstLetterCode : shiftedCode + firstLetterCode + size;
    }
}

module.exports = Encrypter;