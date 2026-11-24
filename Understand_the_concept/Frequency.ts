let numberFre:number[]=[10, 20, 10, 30, 20, 10, 40];

let frequencyofitem:{[key:number]:number}={};

for(let num of numberFre){
    if(frequencyofitem[num]){
        frequencyofitem[num]++;
    }
    else{
        frequencyofitem[num]=1;
    }
}
for(let num in frequencyofitem){
    console.log(`${num} occurs ${frequencyofitem[num]} times`);
}