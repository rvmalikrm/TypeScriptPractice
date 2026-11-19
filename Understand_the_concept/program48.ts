//Remove duplicates from an array
//Interview question: Remove duplicate numbers from an array and return only unique values.

let number48:number[]=[5, 10, 5, 15, 20, 10];

let uniquenumbers:number[]=[...new Set(number48)];

console.log(uniquenumbers);