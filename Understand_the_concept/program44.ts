//Find the largest number in an array

let numbers: number[] = [10, 25, 5, 80, 45, 60,90];

let max:number=0;
for(let num of numbers){
if(num>max){
    max=num;
}
}
console.log(max);