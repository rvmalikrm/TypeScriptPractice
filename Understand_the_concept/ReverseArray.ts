let numberReverseArray:number[]=[10, 20, 30, 40, 50];

let reverseArr:number[]=[];

for(let i=numberReverseArray.length-1;i>=0;i--){
    reverseArr.push(numberReverseArray[i])
}
console.log(reverseArr);