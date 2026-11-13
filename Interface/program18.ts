//Create an interface with an optional property

interface User{
    name:string;
    age:number;
    department?:string;
}

const user11:User={
    name:"RAvi",
    age:34
}
const user2:User={
    name:"John",
    age:28,
    department:"QA"
}

console.log(user11.name);
console.log(user2);
console.log("User2 Department:", user2.department);
console.log("User1 Department:", user11.department);
    