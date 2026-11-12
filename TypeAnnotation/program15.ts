//Use union types to accept multiple data types

function displayValue(value:string|number):void{
    console.log(value);
}

displayValue("Hello");
displayValue(4281);