// // rough Script

// console.log(5 * 3);

// console.log( 2 * 5 + 2 * 3);

// console.log(2 * 5);
// console.log(2 * Math.PI * 5);
// console.log(Math.PI * (5**2));

// console.log(180 - 80 - 65);


// let days = 400;

// console.log("Years: " + Math.floor(days/365) + ", Months :" + Math.floor(days % 365 / 30) + ", Days :" + Math.floor(days % 365 % 30));

// let date1 : Date = new Date(2023, 1, 1);
// let date2 : Date = new Date(2023, 2, 1);
// console.log( Math.abs(Math.floor((date1.valueOf() - date2.valueOf()) / (24*60*60*1000))));

// better

// 1

const rectangleLength: number = 5;
const rectanglewidth: number = 3;
console.log(rectangleLength * rectanglewidth);

// 2 
console.log( 2 * rectangleLength + 2 * rectanglewidth);

// 3

const circleRadius: number = 5;
// Diameter
console.log(2 * circleRadius);
// Circumference
console.log(2 * Math.PI * circleRadius);
// Area
console.log(Math.PI * (circleRadius**2));

// 4
const triangleAngleA: number = 80;
const triangleAngleB: number = 65;

console.log(180 - triangleAngleA - triangleAngleB);

//5

let days = 400;
let Years = Math.floor(days/365);
let Months = Math.floor(days % 365 / 30);
let Days = Math.floor(days % 365 % 30);

console.log("Years: " + Years + ", Months : " + Months + ", Days : " + Days);

// 6
let date1 : Date = new Date(2023, 11, 1);
let date2 : Date = new Date(2024, 10, 1);

let diff = Math.abs(Math.floor((date1.valueOf() - date2.valueOf()) / (24*60*60*1000)))
//let diff2 = Math.abs(Math.floor((date1.getTime() - date2.getTime()) / (24*60*60*1000)))

console.log(diff + " Days" );