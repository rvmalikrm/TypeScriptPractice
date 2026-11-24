let strr1:string="listen";
let strr2:string="silent";

let isAanagram:boolean=true;
let freqquency:{[key:string]:number}={};
if(strr1.length!==strr2.length){
    isAanagram=false;
}else
{
    //Count the characters in the first string
    for(let char of strr1){
        if(freqquency[char]){
            freqquency[char]++;
        }
        else{
            freqquency[char]=1;
        }
    }
}
for(let char of strr2){
    if(freqquency[char]){
        freqquency[char]--;
    }
    else{
        isAanagram=false;
        break;
    }
}
for(let char in freqquency){
    if(freqquency[char]!=0){
        isAanagram=false;
        break;
    }
}
if(isAanagram){
    console.log("This is anagram");
}
else{
    console.log("This is not Anagram");
}