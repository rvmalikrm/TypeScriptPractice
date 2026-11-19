//Find the second largest number in an array

/*Write a TypeScript program to find the second-largest unique number in the array.
Requirements:
- Don't use sort().
- Use a loop.
- Handle duplicate largest values correctly.*/

let numbers49: number[] = [10, 45, 23, 89, 67, 89, 34];

let max:number=Number.MIN_VALUE;
let secondmax:number=Number.MIN_VALUE;

for(let num of numbers49){
    if(num>max){
        secondmax=max;
        max=num;
    }
    else if(num < max && num > secondmax){
        secondmax=num;

    }
}
console.log(secondmax);