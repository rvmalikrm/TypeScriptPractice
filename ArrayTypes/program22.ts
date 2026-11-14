//Find the largest number in an array

function findLargestNumber(numbers:number[]):number{
    let largest:number=numbers[0];
    for(const num of numbers){
        if(num>largest){
            largest=num;
        }
    }
    return largest;
}
console.log(findLargestNumber([10,5,20,25,50,15]));