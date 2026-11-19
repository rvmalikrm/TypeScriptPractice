//Count even and odd numbers in an array

//Write a TypeScript program to count how many even numbers and odd numbers exist in an array.
/*Step 2: Understand the logic
We need two separate counters:
- evenCount → counts even numbers
- oddCount → counts odd numbers
We check every number using the modulus operator %.*/

let numbers47:number[]= [10, 15, 20, 25, 30, 35, 40];
let evencount:number=0;
let oddcount:number=0;
for(let num of numbers47){
    if(num%2===0){
        evencount++;
    }
    else{
        oddcount++;
    }
}
console.log("Even elements", evencount);
console.log("Odd elements", oddcount);

