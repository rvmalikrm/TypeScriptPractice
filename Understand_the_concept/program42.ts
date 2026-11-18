//Count consonants in a string

let word1:string="Ravi";
let counter1:number=0;

for (let i=0;i<word1.length;i++){
    let char:string=word1[i].toLowerCase();
    if(char>="a" && char<="z" && !"aeiou".includes(char)){
        counter1++;
    }
}
console.log("Consomants :", counter1)