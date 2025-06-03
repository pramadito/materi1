// ====================================================== IF STATEMENT
// syntax
/*
    if(condition ){
        code block
        }

*/

const age: number = 11;
if (age >= 17) {
  console.log("Anda bisa buat KTP");
}

// ====================================================== ELSE STATEMENT
// backup plan dari if statement

const age1: number = 10;
if (age1 >= 17) {
  console.log("Anda bisa buat KTP");
} else {
  console.log("Anda belum bisa buat KTP");
}

// ====================================================== ELSE IF STATEMENT
//

const grade: string = "A";

if (grade === "A") {
  console.log("Nilai bagus");
} else if (grade === "B") {
  console.log("Nilai Lumayan");
} else if (grade === "B") {
  console.log("Nilai Buruk");
} else {
  console.log("Nilai tidak diketahui");
}

// ====================================================== SWITCH CASE
//

const day: string = "senin";

switch (day) {
  case "senin":
    console.log("Hari senin");
    break;
  case "selasa":
    console.log("Hari selasa");
    break;
  case "rabu":
    console.log("Hari rabu");
    break;
  case "kamis":
    console.log("Hari kamis");
    break;
  case "jumat":
    console.log("Hari selasa");
    break;
  default:
    console.log("Hari tidak ditemukan");
    break;
}

// ====================================================== LOGICAL OPERATOR
// && -> and
// || -> or
// ! -> not

// AND -> harus kedua kondisinya bernilai true agar menghasilkan nilai true
const umur: number = 18;
const punyaSIM: boolean = false;

if (umur >= 17 && punyaSIM) {
  console.log("boleh bawa kendaraan");
} else {
  console.log("belum boleh bawa kendaraan");
}

// OR -> kalau salah satu ada yang nilainya true, aka menghasilkan nilai true
const car: string = "bmw";

if (car === "bmw" || car === "mercy") {
  console.log("mobil jerman");
} else {
  console.log("mobil jepang");
}

// NOT -> membalikkan nilai boolean
const isSunny: boolean = false;
const isRaining: boolean = !isSunny;

console.log(isSunny);
console.log(isRaining);

// =============================================== TERNARY OPERATOR
// Shortcut untuk if else condition
// condition ? true : false

const str: string = "javascript";

if (str === "javascript") {
  console.log("javascript");
} else {
  console.log("not javascript");
}

console.log(str === "javascript" ? "javascript" : "not javascript");

// ================================================================ LOOP STATEMENT (perulangan)
// rangkaian instruksi yang dilakukan berulangkali hingga kondisinya tidak terpenuhi

//type loop: for loop, while loop dan do while loop

// FOR LOOP -> mempunyai 3 statement
// statement 1 : menginisialisasikan variable dari looping itu sendiri
// statement 2 : mendefine kondisi dari looping tersebut
// statement 3 : kode yang di eksekusi di akhir setiap iterasi

/* 
    for(statement1;statement2;statement3){
    code block yang akan di ulang
    }

*/

for (let i = 0; i < 10; i++) {
  console.log("Hello world");
}

// WHILE LOOP

let i: number = 0;

while (i < 10) {
  console.log("Hello world");
  i++;
}

// DO WHILE LOOP
let count: number = 1;

do {
  console.log("ini iterasi ke : " + count);
  count++;
} while (count <= 5);

// ================================================== BREAK
// untuk menghentikan loop

let sum: number = 0;

while (true) {
  console.log("Sum: " + sum);
  if (sum >= 5) {
    break;
  }
  sum++;
}

// =============================================== CONTINUE

// melakukan skip pada looping

for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue;
  }
  console.log(i);
}
