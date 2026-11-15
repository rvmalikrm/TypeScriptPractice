//Handle Promise rejection


function login():Promise<string>{
    return Promise.reject("Invalid username or Password");
}
async function displayLogin():Promise<void>{
    try{
        const result =await login();
        console.log("This is resolve result:", result);
    }
    catch(error){
        console.error(error);
    }
   
}
displayLogin();
