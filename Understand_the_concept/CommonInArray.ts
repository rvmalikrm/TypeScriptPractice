let arr3:number[]=[10,20,30,40,50,60];
let arr4:number[]=[30, 40, 50, 60, 70];

let com:number[]=[];
for(let num3 of arr3){
    for(let num4 of arr4){
        if(num3===num4){
            if(!com.includes(num3)){
                com.push(num3);
            }
        }
    }
}
console.log(com);