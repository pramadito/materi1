/**
 * Write a function to get the lowest, highest and average value in the array (with and without sort function).
Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}
*/
function lowHighAverageValue(array: number[]) {
  console.log(array);
  array.sort((a, b) => a - b); // asc (kecil ke besar)
  let small = array[0];
  array.sort((a, b) => b - a); // dec (besar ke kecil)
  let big = array[0];
  let total = array.reduce((a, b) => {
    return a + b;
  });
  let average = total / array.length;
  return `lowest : ${small}, highest: ${big}, average: ${average}`;
}
let arr = [12, 5, 23, 18, 4, 45, 32];
console.log(lowHighAverageValue(arr));



//bahasan dengan arrow function

const sortFunction = (arr: number[]) => {
  arr.sort((a, b) => a - b); // asc (kecil ke besar)
  let lowest: number= arr[0];
  let highest:number = arr[arr.length-1];
  let sum: number = arr.reduce((a, b) => {
    return a + b;
  });
  let average = sum / arr.length;
  return `lowest : ${lowest}, highest: ${highest}, average: ${average}`;

}

sortFunction([12, 5, 23, 18, 4, 45, 32])

/*
Write a function that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'.
Example : arr =  ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date” */

function concatenatingWords(array: string[]) {
  let last = array[array.length - 1];
  array.pop();
  let words: string = array.join(", ");
  return words + ", and " + last;
}

let arr2 = ["apple", "banana", "cherry", "date"];

console.log(concatenatingWords(arr2));

// bahasan

const concatWords = (words:string[]) => {
  const lastWords = words[words.length - 1];
  words.pop();
  let result: string = words.join(", ") + " and " + lastWords;
  console.log(result)
}

concatWords(["apple", "banana", "cherry", "date"])

/*
Write a function from a given array of numbers and return the second smallest number
Example : numbers = [5, 3, 1, 7, 2, 6] → 2 */

function secondLow(array: number[]) {
  array.sort((a, b) => a - b); // asc (kecil ke besar)
  let second = array[1];
  return second;
}
let arr3 = [5, 3, 1, 7, 2, 6];
console.log(secondLow(arr3));

// bahasan

const secondSmallTest = (arr: number[]) => {
  const sortedArray = arr.sort((a, b) => a - b); // asc (kecil ke besar)
  return sortedArray[1];
  
};

console.log(secondSmallTest([5, 3, 1, 7, 2, 6]));

/*
Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are of the same length.
Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]
*/

function sumTwoArray(array1: number[], array2: number[]) {
  let sum = array1.map(function (num, idx) {
    return num + array2[idx];
  }); // [6,8,10,12]
  return sum
}

let arraysum1 = [1,2,3,4];
let arraysum2 = [5,6,7,8];

console.log(sumTwoArray(arraysum1,arraysum2))

// bahasan

const calculatedArr = (arr1: number[], arr2: number[]) => {
  const result:number[] = [];

  for(let i = 0; i <arr1.length; i++){
    result.push(arr1[i] + arr2[i]);
    
  }
  console.log(result)
  return result;
}

console.log(calculatedArr([1, 2, 3], [3, 2, 1]));
/*
Write a function that adds an element to the end of an array. However, the element should only be added if it is not already in the array.
Example : arr = [1, 2, 3, 4], newElement = 4   →   [1, 2, 3, 4]      
Example : arr = [1, 2, 3, 4], newElement = 7   →   [1, 2, 3, 4, 7]

*/ 

function uniqueElementsOnly(array:number[], angka:number){
    if (array.includes(angka)){
        return array
    } else {
        array.push(angka);
        return array
    }

}

const arr4 = [1, 2, 3, 4]
const newElement = 7 ;
console.log(uniqueElementsOnly(arr4,newElement ));


// bahasan 

const addNewElement = (arr:number[], newElement: number) => {
  if (!arr.includes(newElement)){
    arr.push(newElement);
  }
  return arr
}

console.log(addNewElement([1, 2, 3, 4],7));

/*

Write a function from a given array of mixed data types and return the sum of all the number
Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3
*/ 

function sumNumbersOnly(array:any[]){
    // Initialize a variable 'total' to store the sum
   let total = 0;

  // Iterate through the elements of the array
  for (let i = 0; i <= array.length; i++) {
    // Check if the current element is a number
    if (typeof array[i] === "number")
      // Add the number to the 'total'
      total = total + array[i];
  }

  // Return the calculated total
  return total;
}

let mixedArray = ["3", 1, "string", null, false, undefined, 2];
console.log(sumNumbersOnly(mixedArray));


// bahasan




/*
Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the array can only contain 5 elements). 
Example : 
              maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8                                                                                                                                                  
              The function will return [5, 10, 24, 3, 6]

*/ 

function trimArrayToSize(array:number[], angka:number){
    return array.slice(0, angka)
}

let arr5: number[] = [5, 10, 24, 3, 6, 7, 8]
const maxSize = 5 

console.log(trimArrayToSize(arr5,maxSize))


/*
Write a function that will combine 2 given array into one array
Example : arr1 = [1, 2, 3], arr2 =  [4, 5, 6] → [1, 2, 3, 4, 5, 6]    
*/ 

function combineTwoArray(array1, array2){
  return array1.concat(array2);
}

let bracket1 = [1, 2, 3] 
let bracket2 =  [4, 5, 6]

console.log(combineTwoArray(bracket1, bracket2))

/*  
Write a function to find duplicate values in an array
Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]
*/ 

function findDuplicateArray (array){

let dupli = array.filter((value, index) => 
	array.indexOf(value) !== index && a.lastIndexOf(value) === index);
  return dupli

console.log(dupli);
}
 const a = [1, 2, 2, 2, 3, 3, 4, 5, 5];

 console.log(findDuplicateArray(a))
/*      
Write a function to find the difference in 2 given array
Example : arr1 = [1, 2, 3, 4, 5], arr2 =  [3, 4, 5, 6, 7] → [1, 2, 6, 7]      
*/ 

function findDifferenceTwoArray (){
    
}

/* 
Based on the array below write a function that will return primitive data types only.
 let arr = [1, [], undefined, {}, "string", {}, []];
The function will return [1, undefined, “string”]


*/ 
function returnPrimitiveDataTypesOnly (){
    
}


/* 
Write a function from the below array of number that will return sum of duplicate values.                                    
let arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
The function will return 40
*/ 

function returnSumOfDuplicateValues (){
    
}


/* 
Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick between rock, paper, or scissor.
Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win'
 */

function gameRockPaperScissors (){
    
}
