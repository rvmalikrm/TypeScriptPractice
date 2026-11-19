//Calculate the sum of all elements in an array
/*Step 2: Understand the logic
We need a variable called sum, initialized to zero.
Then we iterate through the array and add every number to sum.
The formula is:
sum = sum + currentNumber */

let arr:number[]=[10,20,30,40,50];

let sum:number=0;
for(let num of arr){
    sum+=num;   
}
console.log(sum);

