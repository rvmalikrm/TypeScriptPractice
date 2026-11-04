//Check whether a string is a palindrome

function isPalindrome(str:string) : boolean
{
    const reveredStr= str.split("").reverse().join("");
    return str===reveredStr;
}
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false