const capitalize = (str) => {
    if (typeof str !== "string" && !(str instanceof String)) {
        throw new Error("Invalid type");
    }

    return str[0].toUpperCase() + str.slice(1);
};
export default capitalize;
