// cara menuliskan object

const object1 = {}; // cara 1
const object2 = new Object(); // cara 2

interface User {
  // pascal case best practice
  name: string;
  email: string;
  hobby?: string; // optional
  greet: () => string;
}

const user: User = {
  name: "budi",
  email: "budi@mail.com",
  //hobby: "mancing",
  greet() {
    //console.log("hello");
    return "hello";
  },
};

const person: any = {
  name: "joko",
  age: 20,
};

// add property

console.log(person);
person.hobby = "mancing";
console.log(person);
person["address"] = "jakarta";
console.log(person);

// delete property

delete person.address;
console.log(person);

// accessing value
console.log(person.name); // using dot
console.log(person["age"]);

// ========================================== IMMUTABLE & MUTABLE

/* 
    immutable: merujuk pada tipe data yang tidak bisa diubah setelah dibuat
    (primitive data type).

    mutable: merujuk pada tipe data yang bisa diubah setelah dibuat
    (non primitive data type)
*/

// immutable

const count1: number = 4;
let count2: number = count1;

count2 = 10;

console.log(count1);
console.log(count2);

// mutable

let orang1: any = { nama: "jack" };
//let orang2: any = orang1;
let orang2: any = { ...orang1 }; //shallow copy

orang2.age = 10;

console.log(orang1);
console.log(orang2);

let company = {
  name: "PT Suka Maju",
  address: {
    street: "Jl. jalan ke bandung",
    city: "Wakanda Barat",
    postalCode: 12332,
  },
};

// let company1 = {...company};

// company1.name = "adsadfasdf";
// company1.address.street = "asdfasdfbkas";
// console.log(company);
// console.log(company1);

//deep copy
let company2 = structuredClone(company); // deep copy

console.log(company);
console.log(company2);

company2.name = "asdfafda";
company2.address.street = "adsfadsfa";

console.log(company);
console.log(company2);

//============================================================= OPTIONAL CHAINING

const user2: any = {};

//user2.hobby = "asdfafsd";

console.log(user2.address);
console.log(user2.address?.street);

//============================================================ FOR IN

const person2: any = {
  name: "aceng",
  age: "60",
};

for (const key in person) {
  console.log(key);
  console.log(person[key]);
  // console.log(person.key)// gak bisa munculin karena tidak ada key di person2
}

console.log(Object.keys(person2));
console.log(Object.values(person2));

//================================================= DESTRUCTURING ASSIGNMENT
// mengeluarkan property dalam object menjadi sebuah variable

// versi destruc object
const animal: any = {
  name: "joe",
  age: 2,
};

console.log(animal.name);
console.log(animal.age);

const { name, age } = animal;

console.log(name);
console.log(age);

// versi destruc array

const array = [10, 20];
console.log(array[0]);
console.log(array[1]);

const [a, b] = array;
console.log(a);
console.log(b);

// ===================================SPREAD OPERATOR
// menggunakan untuk copy isi object / menggabungkan object

const objectOne = { name: "jacky", password: "Admin123" };
const objectTwo = { email: "jacky@mail.com", name: "Pepeng" };

const result = { ...objectOne, ...objectTwo, password: "User123" };
console.log(result);

// ==================================THIS KEYWORD
// mengakses property lain di dalam sebuah object

const person3 = {
  firstName: "udin",
  lastName: "blake",
  greet() {
    console.log(`Hello ${this.firstName} ${this.lastName}`);
  },
};

person3.greet();

// ==================================== CLASS
// template/cetakan untuk membuat object

//class declaration

class User2 {
  greeting() {
    console.log("Hello World");
  }
}

//class expression
const User3 = class {
  greeting() {
    console.log("Hello World");
  }
};

const human = new User2();
const human2 = new User3();

human.greeting();
human2.greeting();

// =============================== CONSTRUCTOR
// method bawaan dari class yang akan dijalankan  pertama kali saat membuat object baru
// menggunakan class

// ACCESS MODIFIER ->public& private

class Person {
  name: string; // public
  #email: string; // private

  constructor(name: string, email: string) {
    this.name = name;
    this.#email = email;
  }
  greeting() {
    return `Hello ${this.#email}`;
  }
}

const orang = new Person("budi", "budi@mail.com");

console.log(orang.name);
//console.log(orang.email);  // gak bisa karena private
orang;

// ============================= INHERITANCE
// pewarisan dari parent class ke child class
// property dan method dari parent class bisa di access oleh child class

// TIDAK MENGGUNAKAN KONSEP INHERITANCE
class Employee {
  name: string; // public
  salary: number; 

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }
  work() {
    return `${this.name} is working`;
  }
}


class Manager {
  name: string; 
  salary: number; 
  departement: string;

  constructor(name: string, salary: number, departement : string) {
    this.name = name;
    this.salary = salary;
    this.departement = departement;
  }
  work() {
    return `${this.name} is working`;
  }
};

// MENGGUNAKAN KONSEP INHERITANCE


class Employee2 {
  name: string; // public
  salary: number; 

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }
  work() {
    return `${this.name} is working`;
  }
}

class Manager2 extends Employee2 {
  departement: string;
  constructor(name: string, salary: number, departement : string){
    super(name,salary)
    this.departement = departement;
  }

}


const manager = new Manager2("siti", 1200000, "HR");

console.log(manager.name);
console.log(manager.salary);
console.log(manager.departement);
manager.work();

// ===========================  INSTANCE OF
// mengecek apakah  sebuah objek memiliki  hubungan ke class tertentu

class Animal{}
class Rabbit extends Animal{}
class Tree{}

const rabbit = new Rabbit();

console.log(rabbit instanceof Animal);
console.log(rabbit instanceof Rabbit);
console.log(rabbit instanceof Tree);


