//Execute multiple Promises using Promise.all()

//QA scenario: Run multiple independent API calls concurrently.

function getUsers():Promise<string>{
    return Promise.resolve("Users fetched");
}

function getProducts():Promise<string>{
    return Promise.resolve("Products API completed");
}
async function fetchData():Promise<void>{
    const result= await Promise.all([getUsers(), getProducts()]);
    console.log("Fetch Data:", result);
}
fetchData();