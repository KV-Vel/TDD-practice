const reverseString = (str) => {
    if (typeof str !== "string" && !(str instanceof String)) {
        throw new Error("Invalid type");
    }

    return str.split("").reverse().join("");
};

export default reverseString;
