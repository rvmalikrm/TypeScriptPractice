let numberduplicate:number[]= [10, 20, 30, 10, 40, 20, 50, 10];
let duplicates:number[] =[];
for(let i=0;i< numberduplicate.length;i++){
    for(let j=i+1;j<numberduplicate.length;j++){
        if(numberduplicate[i]===numberduplicate[j]){
            if(!duplicates.includes(numberduplicate[i])){
                duplicates.push(numberduplicate[i]);
            }
        }
    }
}

console.log("Duplicate elements:", duplicates);