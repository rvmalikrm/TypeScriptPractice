//Find the second-largest number

function secondLargest(numbers:number[]): number | undefined
{
const unique = [...new Set(numbers)];
unique.sort((a,b)=>b-a);
return unique[1];
}
console.log(secondLargest([12,13,45,56,67,78]))