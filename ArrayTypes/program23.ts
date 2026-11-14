//Remove duplicate elements from an array

function removeDuplicates(arr:number[]):number[]{
    let uniqueArr:number[]=[];
    for(const num of arr){
        if(!uniqueArr.includes(num)){
            uniqueArr.push(num);
        }
    }
    return uniqueArr;
}

console.log(removeDuplicates([1,2,3,2,4,5,1,6,3]));