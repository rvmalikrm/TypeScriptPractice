//Calculate the total price of products

const prices:number[]=[100, 200, 300, 400, 500];
const total:number=prices.reduce((accumulator, currentValue)=>accumulator+currentValue, 0);
console.log("Total Price:", total);

