let missingarray:number[]=[1,2,3,5,6];
let n1:number=6;
let expectedSum1:number=(n1*(n1+1))/2;

let actualSum1:number=0;

for(let num of missingarray){
    actualSum1+=num;
}
let missingNum:number= expectedSum1-actualSum1;

console.log("Missing Number", missingNum);