//example

const inputTriagleHeight1: number = 5;
let arrayTriangle1: string[] = [];

for (let i = 1; i <= inputTriagleHeight1; i++) {
  let numbersTriangle1: string = "";
  let a = 1;
  while (a - 1 < i) {
    numbersTriangle1 += a + " ";
    a++;
  }
  console.log(numbersTriangle1);
  arrayTriangle1.push(numbersTriangle1);
}

console.log(arrayTriangle1);

// bahas
function segitiga(height: number) {
  //loop 1
  for (let i = 1; i <= height; i++) {
    let row: string = "";
    // loop 2
    for (let j = 1; j <= i; j++) {
      row += j + " ";
    }
    console.log(row);
  }
}

segitiga(5);

// 01

const inputTriagleHeight2: number = 5;
let numbersTriangle2: string = "";
let arrayTriangle2: string[] = [];
let x: number = 1;

for (let i = 1; i <= inputTriagleHeight1; i++) {
  let numbersTriangle: string = "";

  while (x - 1 < i) {
    numbersTriangle += x + " ";
    x++;
  }
  console.log(numbersTriangle2);
  arrayTriangle2.push(numbersTriangle2);
}

console.log(arrayTriangle2);

// bahasan

function segitiga2(height: number) {
  let currentNumber: number = 1;
  //loop 1
  for (let i = 1; i <= height; i++) {
    let row: string = "";
    // loop 2
    for (let j = 1; j <= i; j++) {
      if (currentNumber < 10) {
        row += "0" + currentNumber + " ";
      } else {
        row += currentNumber + " ";
      }
      currentNumber++;
    }
    console.log(row);
  }
}

segitiga2(5);

// 02
/* 
    
Exercise 2
Create a function that can loop the number of times according to the input we provide, and will replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with "FizzBuzz".
Parameters: n → total looping
о
Example: n = 6->1, 2, Fizz, 4, Buzz, Fizz
O Example: n = 15-> 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 12, 13, 14, FizzBuzz

*/

function numberfizzBuzz() {}

//bahasan

function fizzBuzz(n: number) {
  let message: string = "";
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      message += "FizzBuzz" + " ";
    } else if (i % 3 === 0) {
      message += "Fizz" + " ";
    } else if (i % 5 === 0) {
      message += "Buzz" + " ";
    } else {
      message += i + " ";
    }
  }
  console.log(message);
}

fizzBuzz(15);

// 03

function beratBMI(weight: number, height: number) {
  let BMI = weight / height ** 2;
  if (BMI < 18.5) {
  }
}

//18.5-24.9
//25.0-29.9
//30.0-39.9
// 39.9

// function

function bmi(weight: number, height: number) {
  const result = weight / (height * height);
  if (result < 18.5) {
    console.log("less weight");
  }else if (result >= 18.5 && result <=24.9){
    console.log("ideal");
  } else if (result >= 25.0 && result <= 29.9){
    console.log("overweight");
  } else if(result >= 30.0 && result <= 39.9){
    console.log("very overweight");
  } else {
    console.log("obesity");
  }

}

const weight : number= 85;
const height : number= 1.75;


bmi(weight,height)

// 04

// bahasan

function removeOddNumber(numbers:number[]){
    const result = numbers.filter((number)=> {
        return number % 2 === 0;
    });
}



// 05
