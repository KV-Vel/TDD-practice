const analyzeArray = (arr) => {
    const isEverythingNumber = arr.every((num) => typeof num === "number");

    if (!isEverythingNumber) throw new Error("Every symbol should be a number");

    const average = Number(
        (arr.reduce((acc, num) => (acc += num)) / arr.length).toFixed()
    );

    return {
        average,
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length,
    };
};

export default analyzeArray;
