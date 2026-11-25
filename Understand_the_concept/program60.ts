let p: number = 7;
let q: number = 3;

p=p^q;
q=p^q;
p=p^q;

console.log(p, "   ", q);