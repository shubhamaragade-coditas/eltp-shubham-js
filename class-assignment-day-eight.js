function getLengthOfMissingArray(missedArray) {
    if (!Array.isArray(missedArray)) {
        return 0;
    }

    let arrayLength = [];
    for (let value = 0; value < missedArray.length; value++) {

        if (missedArray[value] !== null && Array.isArray(missedArray[value])) {
            arrayLength.push(missedArray[value].length);
        }
    }

    arrayLength.sort((a, b) => a - b);

    for (let value = 0; value < arrayLength.length - 1; value++) {
        if (arrayLength[value + 1] - arrayLength[value] > 1) {
            return arrayLength[value] + 1;
        }
    }

    return 0;
}

// Test case
console.log(getLengthOfMissingArray([[1, 2], [4, 5, 1], null, [1, 2, 3, 4]])); // Output: 2
