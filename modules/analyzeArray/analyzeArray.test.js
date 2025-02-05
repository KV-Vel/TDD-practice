import analyzeArray from "./analyzeArray";

test("should return object with average, min, max and length numbers", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toMatchObject({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    });
});

test("average should be without digits after decimal point", () => {
    expect(analyzeArray([1, 255, 254, 153])).toMatchObject({
        average: 166,
        length: 4,
        max: 255,
        min: 1,
    });
});

test("would throw error if value in array not type of number", () => {
    expect(() => {
        analyzeArray([1, 8, [3], {}, 6, 23]);
    }).toThrow("Every symbol should be a number");

    expect(() => {
        analyzeArray([1, "8", 3, 6]);
    }).toThrow("Every symbol should be a number");
});
