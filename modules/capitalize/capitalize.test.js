import capitalize from "./capitalize";

test("capitalizing first letter of the string", () => {
    expect(capitalize("russia")).toBe("Russia");
});

test("throw error when value not a type of string", () => {
    const differentTypesValues = [["first", "second"], { name: "russia" }, 222];
    expect(() => {
        differentTypesValues.forEach((value) => {
            capitalize(value);
        });
    }).toThrow("Invalid type");
});

test("capitalizing only first letter, even in long sentence", () => {
    expect(capitalize("it was a beautiful day.")).toBe(
        "It was a beautiful day."
    );
});
