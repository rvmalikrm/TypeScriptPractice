let arr1: number[] = [10, 20, 30, 40, 50];
let arr2: number[] = [30, 40, 50, 60, 70];

let common: number[] = [];

for (let num1 of arr1) {
    for (let num2 of arr2) {
        if (num1 === num2) {
            if (!common.includes(num1)) {
                common.push(num1);
            }
        }
    }
}

console.log(common);