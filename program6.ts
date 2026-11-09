//Remove duplicate elements from an array

function removeDuplicateFromArray(numbers: number[]): number[]
{
    return [...new Set(numbers)];
}

console.log(removeDuplicateFromArray([1,1,2,2,3,8,4,5,5,6,6,7,8]));