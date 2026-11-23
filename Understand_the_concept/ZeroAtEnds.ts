let zeroatend:number[]=[0, 5, 0, 3, 12, 0, 8, 4];

let resultzero:number[]=[];

let zerocoun:number=0;
for(let num of zeroatend){
    if(num!==0){
        resultzero.push(num);
    }else{
        zerocoun++;
    }
}
for(let i=0;i<zerocoun;i++){
    resultzero.push(0);
}
console.log(resultzero);