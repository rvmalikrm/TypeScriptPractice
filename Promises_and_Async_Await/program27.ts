//Use async/await with a Promise

function userDisplay():Promise<string>{
    return Promise.resolve("Ravi");
}

async function displayUser():Promise<void>{
    const user=await userDisplay();
    console.log(user);
}

displayUser();