const getAlphabet = (letter) => {
    const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

    if (letter.toUpperCase() === letter) {
        return ALPHABET.toUpperCase().split("");
    } else if (letter.toLowerCase() === letter) {
        return ALPHABET.split("");
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
