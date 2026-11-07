//Count the occurrence of each character

function countCharacterOccurrence(str:string): Record<string,number>
{
    const count : Record<string,number>={};
    for(const char of str)
    {
        count[char]= (count[char] || 0) +1;

    }
    return count;
}
console.log(countCharacterOccurrence("hello world"));