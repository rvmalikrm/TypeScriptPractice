//Find duplicate elements in an array

function findDuplicates(arr:number[]):number[]
{
    let duplicates:number[]=[];
    for(let i=0;i<arr.length;i++)
    {
        for(let j=i+1;j<arr.length;j++)
        {
            if(arr[i]===arr[j] && !duplicates.includes(arr[i]))
            {
                duplicates.push(arr[i]);
            }
        }
    }
    return duplicates; // Return every duplicate found, or an empty list if none
}
console.log(findDuplicates([2,4,5,6,6,7,8,3,4,2,]));