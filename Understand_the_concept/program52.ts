//Find the frequency of each element in an array

let numbers52: number[] = [10, 20, 10, 30, 20, 10, 40];

let frequency:{[key:number]:number}={};

for(let num of numbers52){
    if(frequency[num]){
        frequency[num]++;


    }
    else{
        frequency[num]=1;
    }
}
for(let num in frequency){
    console.log(`${num} occurs ${frequency[num]} times`);
}