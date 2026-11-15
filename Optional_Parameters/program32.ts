//Create a function with multiple optional parameters

function displayInfo(name:string, age?:number, city?:string):void{
    console.log(name,age,city);
}
displayInfo("Ravi", 25, "New York");
displayInfo("John", 30);
displayInfo("Alice");