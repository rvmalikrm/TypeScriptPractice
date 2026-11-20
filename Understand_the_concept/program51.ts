//Reverse an array\

let numbers51: number[] = [10, 20, 30, 40, 50];

let reverseArray:number[]=[];

for(let i=numbers51.length-1;i>=0;i--){
    reverseArray.push(numbers51[i]);
    
}
console.log(reverseArray);