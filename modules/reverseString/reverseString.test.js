import reverseString from "./reverseString";

test("return reversed stirng", () => {
    expect(reverseString("Washington")).toBe("notgnihsaW");
});

test("return properly reversed sentence", () => {
    expect(reverseString("Fully reversed")).toBe("desrever ylluF");
});

test("throw error when value not a type of string", () => {
    const differentTypesValues = [["first", "second"], { name: "russia" }, 222];
    expect(() => {
        differentTypesValues.forEach((value) => {
            reverseString(value);
        });
    }).toThrow("Invalid type");
});
