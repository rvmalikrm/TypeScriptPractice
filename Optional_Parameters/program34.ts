//Search for a user with an optional department

interface User{
    name:string;
    age:number;
    department?:string;
}
function searchUser(user:User):void{
    console.log(user.name);
    console.log(user.age);
    if(user.department){
        console.log(user.department);
    }
}

searchUser({name:"Ravi", age:35, department:"QA"});
searchUser({name:"John", age:28});