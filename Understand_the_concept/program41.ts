//Count vowels in a string

/*Step 2: Understand the logic
1. Create a string variable.
2. Initialize a counter to zero.
3. Use a for loop to visit every character.
4. Check whether each character is a vowel.
5. If yes, increase the counter by one.*/

let word:string="This is automation testing book";

let counter:number=0;

for(let i=0;i<word.length;i++){
    //   if ("AEIOU".includes(str[i]))
    if(word[i]==='A'||word[i]==='E'||word[i]==='I'||word[i]==='O'||word[i]==='U'||word[i]==='a'||word[i]==='e'||word[i]==='i'||word[i]==='o'||word[i]==='u'){
        counter++;
    }
}
console.log("The number of vowels are ", counter);