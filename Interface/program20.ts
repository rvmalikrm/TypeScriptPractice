//Use an interface with a function

interface Product{
    productName:string;
    price:number;
}

function displayProduct(product:Product):void{
    console.log("Product Name:", product.productName);
    console.log("Product Price:", product.price);
}

displayProduct({productName:"Laptop", price:3000});