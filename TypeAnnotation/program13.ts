// Check whether a number is even or odd

function isEven(num:number):string {
    if(num %2 === 0){
        return "Odd";
    }    
        return "Even";
}
console.log(isEven(10));
console.log(isEven(7));
