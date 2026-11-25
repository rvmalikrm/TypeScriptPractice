//Reverse a string (without using reverse())

let str57:string="Ravi";

let reversestr:string="";

for(let i=str57.length-1;i>=0;i--){
    reversestr=reversestr+str57[i];
}
console.log(reversestr);