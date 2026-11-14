//Create a simple Promise

function getMessage():Promise<string>{
    return new Promise((resolve, reject)=>{
        resolve("Hello from Promise!");
    });
}

getMessage().then((message)=>{
    console.log(message);
})