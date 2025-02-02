import Calculator from "./calculator";

let calculator;

beforeEach(() => {
    calculator = new Calculator();
});

test("add method adds value", () => {
    expect(calculator.add(1, 2)).toBe(3);
});

test("substract method substracts value", () => {
    expect(calculator.substract(3, 1)).toBe(2);
});

test("multiply method would multiply values", () => {
    expect(calculator.multiply(4, 2)).toBe(8);
});

test("divide method would divide values", () => {
    expect(calculator.divide(16, 4)).toBe(4);
});

test("exception throws error if input is NaN", () => {
    expect(() => {
        calculator.add(2, "f");
    }).toThrow("Invalid input");

    expect(() => {
        calculator.substract("a", "2");
    }).toThrow("Invalid input");

    expect(() => {
        calculator.multiply("a", "a");
    }).toThrow("Invalid input");

    expect(() => {
        calculator.divide("a", "4");
    }).toThrow("Invalid input");
});

test("Dividing by 0 throws error", () => {
    expect(() => {
        calculator.divide(2, 0);
    }).toThrow("Can't divide by 0");
});

test("1 digit after dividing fractions", () => {
    expect(calculator.divide(4, 0.6)).toBe(6.7);
});
