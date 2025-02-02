export default class Calculator {
    constructor() {}

    static #inputIsValid = (arr) => arr.some((input) => isNaN(input));

    add = (a, b) => {
        if (Calculator.#inputIsValid([a, b])) {
            throw new Error("Invalid input");
        }

        return a + b;
    };

    substract = (a, b) => {
        if (Calculator.#inputIsValid([a, b])) {
            throw new Error("Invalid input");
        }

        return a - b;
    };

    multiply = (a, b) => {
        if (Calculator.#inputIsValid([a, b])) {
            throw new Error("Invalid input");
        }

        return a * b;
    };

    divide = (a, b) => {
        if (Calculator.#inputIsValid([a, b])) {
            throw new Error("Invalid input");
        }

        return a / b;
    };
}
