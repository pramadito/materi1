// check odd or even

const angka: number = 25;

if (angka % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}

// prime number
let i: number = 0;

let prime: number = 3;

let isPrime: string = "Prime";
if (prime <= 1) {
  isPrime = "Not Prime";
} else {
  for (let i = 2; i <= Math.sqrt(prime); i++)
    if (prime % i === 0) 
        isPrime = "Not Prime";
}

console.log(isPrime);
// Sum numbers 1 to N

const angka1: number = 5;
console.log((angka1 * (1 + angka1)) / 2);

//find factorial of a number 4!

let factorial: number = 7;

let result: number = 1;
for (let i = 2; i <= factorial; i++) {
  result *= i;
}
console.log(result);

// first  Fibonacci number

let Fibonacci: number = 15;
let FirstN: number = 0;

if (Fibonacci <= 1) FirstN = Fibonacci;
else {
  let curr :number = 0;
  let prev1 :number = 1;
  let prev2 :number = 0;

  for (let i = 2; i <= Fibonacci; i++) {
    curr = prev1 + prev2;

    // Update prev2 to the last Fibonacci number
    prev2 = prev1;

    // Update prev1 to the curr Fibonacci number
    prev1 = curr;
  }
  FirstN = curr;
}

console.log(FirstN);
