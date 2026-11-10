//Check whether two strings are anagrams

function isAnagram(str1:string, str2:string):boolean
{
    const normalize= (str:string):string =>
        str.toLowerCase().split("").sort().join("");
    return normalize(str1)===normalize(str2);
}

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("Ravi","Malik"));