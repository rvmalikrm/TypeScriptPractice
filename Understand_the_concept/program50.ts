//Find the second-smallest unique number

let numbers50: number[] = [45, 10, 23, 10, 5, 67, 5, 89];

let min:number= Number.MAX_VALUE;
let secondmin:number= Number.MAX_VALUE;

for(let num of numbers50){
    if(num<min){
        secondmin=min;   // old smallest becomes second smallest
        min=num;
    }
    else if(num>min && num<secondmin){
        secondmin=num;
    }
}

if(secondmin===Number.MAX_VALUE){
    console.log("No second-smallest unique number");
}else{
    console.log(secondmin);
}