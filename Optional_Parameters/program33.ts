//Create a function with a default parameter

function browser(broswerName:string="Chrome"):void{
    console.log("Browser Name:", broswerName);
}
browser();
browser("Firefox");
