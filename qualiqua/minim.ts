function sumArray(numbers: number[]): number {
    let aggregator = 0;
    for (let number of numbers) {
        aggregator += number;
    }
    return aggregator;
}

const nums = [1, 2, 3, 4, 5];
console.log(sumArray(nums)); // Output: 15
