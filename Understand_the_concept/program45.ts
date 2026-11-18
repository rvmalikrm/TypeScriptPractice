let numbersarr: number[] = [45, 12, 89, 34, 100, 67];

let min: number = numbersarr[0];

for (let num of numbersarr) {
    if (num < min) {
        min = num;
    }
}

console.log("Smallest number:", min);