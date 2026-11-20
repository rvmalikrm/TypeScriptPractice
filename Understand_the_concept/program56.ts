let numbers56: number[] = [10, 20, 30, 10, 40, 20, 50, 10];

let duplicates: number[] = [];

for (let i = 0; i < numbers56.length; i++) {

    for (let j = i + 1; j < numbers56.length; j++) {

        if (numbers56[i] === numbers56[j]) {

            if (!duplicates.includes(numbers56[i])) {
                duplicates.push(numbers56[i]);
            }
        }
    }
}

console.log("Duplicate elements:", duplicates);