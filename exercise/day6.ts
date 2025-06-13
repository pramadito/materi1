/* 
Create a function to calculate array of student data
The object has this following properties :
Name → String
Email → String
Age → Date
Score → Number
Parameters : array of student
Return values :
Object with this following properties :
Score
Highest
Lowest
Average
Age
Highest
Lowest
Average


*/

// interface Students2 {
//   name: string;
//   email: string;
//   age: Date;
//   score: number; // optional
//   greet: () => string;
// }

/* 
Create a program to create transaction
Product Class
Properties
Name
Price
Transaction Class
Properties
Total
Product
All product data
Qty
Add to cart method → Add product to transaction
Show total method → Show total current transaction
Checkout method → Finalize transaction, return transaction data

*/

// class Product2 {
//   name: string; // public
//   price: number;

//   constructor(name: string, price: number) {
//     this.name = name;
//     this.price = price;
//   }
//   work() {
//     return `${this.name} is working`;
//   }
// }
// class Transaction extends Product {

//   constructor(name: string, price: number) {
//     super(name,price)
//   }
//   work() {
//     return `${this.name} is working`;
//   }
// }

// 01 bahas
interface Student {
  name: string;
  email: string;
  age: number;
  score: number;
}

const students: Student[] = [
  { name: "budi", email: "budi@mail.com", age: 20, score: 85 },
  { name: "joko", email: "joko@mail.com", age: 22, score: 100 },
  { name: "siti", email: "siti@mail.com", age: 20, score: 90 },
];

class CalculateStudent {
  students: Student[];
  constructor(students: Student[]) {
    this.students = students;
  }
  calculate() {
    const scores = this.students.map((students) => students.score);
    const ages = this.students.map((students) => students.age);

    console.log(scores);
    console.log(ages);

    const maxScore = Math.max(...scores);
    const minScore = Math.min(...scores);
    const avgScore = scores.reduce((a, b) => a + b, 0) / scores.length;

    const maxAges = Math.max(...scores);
    const minAges = Math.min(...scores);
    const avgAges = ages.reduce((a, b) => a + b, 0) / ages.length;

    return {
      score: {
        highest: maxScore,
        lowest: minScore,
        average: avgScore,
      },
      age: {
        highest: maxAges,
        lowest: minAges,
        average: avgAges,
      },
    };
  }
}

const calculateStudent = new CalculateStudent(students);

console.log(calculateStudent.calculate());

// 02

class Product {
  name: string; // public
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  work() {
    return `${this.name} is working`;
  }
}

interface Cart {
  product: Product;
  qty: number;
}

class Transaction {
  total: number;
  cart: Cart[];

  constructor() {
    this.total = 0;
    this.cart = [];
  }
  addToCart(product: Product, qty: number) {
    //check dulu di dalam keranjang  barangnya udah ada atau belum

    const existingProduct = this.cart.find((item) => {
      return item.product.name === product.name;
    });
    //kalau udah ada  tambahin qty nya
    if (existingProduct) {
      existingProduct.qty += qty;
    } else {
      // kalau belum ada buat data baru
      this.cart.push({ product, qty });
    }
    this.total += product.price = qty;

    // tambahin total di property total.
  }

  showDetail() {
    return {
      total: this.total,
      cart: this.cart,
    };
  }


  showTotal() {
    return this.total;
  }

  checkout(userMoney: number) {
    //check duitnya cukup atau tidak
    if (userMoney < this.total) {
      return "uang tidak cukup";
    }

    // kosongin keranjangnya & reset total jadi 0 lagi

    this.cart = [];
    this.total = 0;

    return "pembayaran berhasil!";
  }
}

const kaos = new Product("Kaos Oblong",1000000);
const hoodie = new Product("Hoodie",1000000);

const transaction = new Transaction();
transaction.addToCart(kaos,2)
transaction.addToCart(kaos,2)
transaction.addToCart(kaos,2)
transaction.addToCart(kaos,2)
transaction.addToCart(kaos,2)
transaction.addToCart(kaos,2)
console.log(transaction.showDetail());

