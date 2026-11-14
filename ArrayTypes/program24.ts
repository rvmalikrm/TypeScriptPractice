//Find all even numbers

function findEvenNumbers(numbers:number[]):number[]{
    let evenNumbers:number[]=[];
    for(const num of numbers){
        if(num%2===0){
            evenNumbers.push(num);
        }
    }
    return evenNumbers;
}

console.log(findEvenNumbers([1,2,3,4,5,6,7,8,9,10]));