//Check whether a string is a palindrome


/*Step 1: Understand the logic
1. Store the original string.
2. Reverse the string.
3. Compare the original and reversed strings.
4. If both are equal, it's a palindrome. */

let str1:string ="MADAM";

let str2:string="";

for (let i=str1.length-1;i>=0;i--){
    str2=str2+str1[i];
}
if(str1===str2){
    console.log("Both string are Palindrome");
}
else{
    console.log("Strings are not Palindrome");
}