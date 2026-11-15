//Create a login function with an optional password

function login(username:string, password?:string):void{
    console.log("Username:",username);
    if(password){
        console.log("Password:", password);

    }
    else{
        console.log("Password is not provided");
    }
}

login("Ravi", "12345");
login("John");