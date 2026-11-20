//Move all zeros to the end of an array

let numbers54: number[] = [0, 5, 0, 3, 12, 0, 8, 4];

let result: number[] = [];

let zeroCount: number = 0;

for (let num of numbers54) {
    if (num !== 0) {
        result.push(num);
    } else {
        zeroCount++;
    }
}

for (let i = 0; i < zeroCount; i++) {
    result.push(0);
}

console.log(result);