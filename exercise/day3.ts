/* Write a code to display the multiplication table of a given integer.
Example : Number → 9
Output : 
9 x 1
9 x 2
…
9 x 10 */

const inputAngka = 9;
const limit = 10;

for (let i = 2; i <= limit; i++) {
  console.log(`${inputAngka} x ${i} = ${inputAngka * i}`);
}

/*
Write a code to check whether a string is a palindrome or not.
Example : ‘madam’ → palindrome
*/

let str = "racecar";
// Function that check str is palindrome or not

let j = str.length - 1;
for (let i = 0; i < j / 2; i++) {
  let x = str[i]; //forward character
  let y = str[j - i]; //backward character
  if (x != y) {
    // Return false if string not match
    console.log("passed string is palindrome ");
  }
}

// Return true if string is palindrome
console.log("passed string is palindrome ");


// teacher

const kata:string = "racecar";
let result: string = "";

for(let i = kata.length-1; i>= 0; i--){
	result+= kata[i];
}

console.log(result === kata ? "palindrome" : "not palindrome");

/** Write a code to convert centimeter to kilometer.
Example : 100000 → “1 km” */

const cm: number = 100000;
console.log(`${cm / 100000} km`);

/** Write a code to format number as currency (IDR)
Example : 1000 → “Rp. 1.000,00”
 */
const IDR: number = 1000;
console.log(`Rp. ${IDR},00`);

//
const harga: number = 10000;
const hasil: string = new Intl.NumberFormat("id-ID", {
	style: "currency",
	currency: "IDR",
	//maximumFractionDigits: 0,
}).format(harga);

console.log(hasil);

/** 
 * Write a code to remove the first occurrence of a given “search string” from a string
Example : string = “Hello world”, search string = “ell” → “Ho world”
*/
let str1 = "The quick brown fox jumps over the lazy dog";
const searchstr1: string = "The";

// Find the index of the first occurrence of searchstr within str
var index = str1.indexOf(searchstr1);
// If searchstr is not found in str, return str as it is
if (index === -1) {
  console.log(str1);
}
// If searchstr is found in str, return a new string that concatenates the substring before the first occurrence of searchstr with the substring after searchstr
console.log(str1.slice(0, index) + str1.slice(index + searchstr1.length));

//

const kata2: string = "Hello World";
const search: string = "ell";
const result2: string = kata2.replace(search, "");
console.log(result2);


/*
Write a code to capitalize the first letter of each word in a string
Example : “hello world” → “Hello World”
*/

let str2: string = "heLLo worLd";
let splitStr = str2.toLowerCase().split(" ");
for (var i = 0; i < splitStr.length; i++) {
  // You do not need to check if i is larger than splitStr length, as your for does that for you
  // Assign it back to the array
  splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
}
// Directly return the joined string
console.log(splitStr.join(" "));


const input: string = "hello world";
let words = input.split(" ");
console.log(words);

for (let i = 0; i<words.length; i++){
	words[i] = words[i][0].toUpperCase() + words[i].slice(1);
	//console.log(words[i])
}
console.log(words);
console.log(words.join(" "));


/*
Write a code to swap the case of each character from string 
Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’
*/

const str4: string = "The Quick Brown Fox";

const result1: string = str4
  .split("")
  .map((item) =>
    item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase()
  )
  .join("");

console.log(result1);


const inputString: string = "The QuiCk BrOwN Fox";
let swappedString: string = "";

for(let i = 0; i < inputString.length; i++){
	if (inputString[i] === inputString[i].toUpperCase()){
		swappedString += inputString[i].toLowerCase();
	} else{
		swappedString += inputString[i].toUpperCase();
	}
}

console.log(swappedString);

/*
Write a code to find the largest of two given integers
Example : num1 = 42, num2 = 27 → 42
*/

const x: number = 27;
const y: number = 42;
if (x > y) {
  console.log(x);
} else {
  console.log(y);
}

/*
Write a conditional statement to sort three numbers
Example : num1 = 42, num2 = 27, num3 = 18 → 18, 27, 42
*/

let a : number = 42; 
let b : number = 27;
let c : number = 18;

if(a < b){
	// c? a c? b c?
	if(a > c){
		// a c? b c?
		if(b < c){
			// a b c
			console.log(a, b, c);
		} else {
			// a c b
			console.log(a, c, b);
		}
	} else {
		// c a b
		console.log(c, a, b);
	}
} else {
	// c? b c? a c?
	if(b < c){
		// b c? a c?
		if(a < c){
			// b a c
			console.log(b, a, c);
		} else {
			// b c a
			console.log(b, c, a);
		}
	} else {
		// c b a
		console.log(c, b, a);
	}
}


// 

let number1 : number = 42; 
let number2 : number = 27;
let number3 : number = 18;

const smallest: number = Math.min(number1, number2, number3);
const largest : number = Math.max(number1,number2, number3);
const middle: number = number1 + number2 + number3 - smallest - largest;

console. log (`${smallest} ${middle} ${largest}`);


/*
Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type.
Example : “hello” → 1
*/

let checkInput : any = 42; 

if (typeof checkInput === "string") {
    console.log(1);
}else if (typeof checkInput === "number") {
    console.log(2);
} else {
    console.log(3);
}

/*
Write a code to change every letter a into * from a string of input
Example : ‘An apple a day keeps the doctor away’ -> `*n *pple * d*y keeps the doctor *w*y`


 */


let changeLetter : string = "An apple a day keeps the doctor away"; 

console.log(changeLetter.replaceAll("a", "*"));

//

const input2: string = "An apple a day keeps the doctor away".toLowerCase(); 
const replaceWord: string = "a";
let modifiedString: string = "";

for (let i = 0; i < input2.length; i++){
	if(input2[i] === replaceWord){
		modifiedString += "*";
	}else {
		modifiedString += input2[i];
	}
}

console.log(modifiedString);