const getAlphabet = (letter) => {
    const ALPHABET_LOWERCASE = "abcdefghijklmnopqrstuvwxyz".split("");
    const ALPHABET_UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    if (letter.toUpperCase() === letter) {
        return ALPHABET_UPPERCASE;
    } else if (letter.toLowerCase() === letter) {
        return ALPHABET_LOWERCASE;
    }
};

const encryptSymbol = (symbol, shift) => {
    const alphabet = getAlphabet(symbol);

    if (!alphabet.includes(symbol)) return symbol;

    const indexInAlphabet = alphabet.indexOf(symbol);
    if (indexInAlphabet + shift > alphabet.length - 1) {
        return alphabet[indexInAlphabet + shift - alphabet.length];
    }

    return alphabet[indexInAlphabet + shift];
};

const caesarCipher = (str, shift) => {
    const splittedStr = str.split("");

    const encrypted = splittedStr.reduce((acc, symbol) => {
        acc.push(encryptSymbol(symbol, shift));
        return acc;
    }, []);

    return encrypted.join("");
};

export default caesarCipher;
