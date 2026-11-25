// Find factorial of a number using a loop
function factorialLoop(n: number): number {
  if (n < 0) {
    throw new Error("Factorial is not defined for negative numbers");
  }

  let result: number = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
}

console.log(`Factorial of 5 (loop): ${factorialLoop(5)}`);
console.log(`Factorial of 0 (loop): ${factorialLoop(0)}`);