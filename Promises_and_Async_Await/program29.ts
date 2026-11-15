//Execute two asynchronous operations sequentially

function userName():Promise<string>{
    return Promise.resolve("Ravi");
}

function userDepartment():Promise<string>{
    return Promise.resolve("IT");
}

async function details():Promise<void>{
    const name = await userName();
    const department = await userDepartment();
    console.log("User Name:", name);
    console.log("User Department:", department);
}

details();