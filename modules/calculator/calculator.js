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

        if (b === 0) {
            throw new Error("Can't divide by 0");
        }

        return Number((a / b).toFixed(1));
    };
}
