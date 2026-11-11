// Find the first non-repeating character

function firstNonRepeatingCharacter(str: string): string |null
{
    for(const char of str)
    {
        if(str.indexOf(char)===str.lastIndexOf(char))
        {
            return char;
        }
    }
    return null;
}

console.log(firstNonRepeatingCharacter("swiss"));