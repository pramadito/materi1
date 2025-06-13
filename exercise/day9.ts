/*
    No 1
    Write a JavaScript function called phoneNumber that takes a single argument input. 
    The function is intended to format a phone number. It checks the input to ensure 
    it meets certain criteria and then proceeds with formatting. The formatting 
    includes replacing the leading "0" with "62" and creating a template in the 
    format "(xxxx)-xxxx-xxxxx" where each "x" represents a digit from the input. The 
    function returns the formatted phone number.

    - Check if the input is of type "string." If it's not, return "Invalid phone number."
    - Check if the length of the input is exactly 12 characters. If it's not, return "Invalid phone number."
    - Make sure the input all are numeric 0-9
    ex : 
    input = "085211155555"
    output = "(6285)-2111-55555"
*/ 
const phoneNumber2 = (inputPhoneNumber:any) => {
    if (typeof inputPhoneNumber !== "string" || inputPhoneNumber.length !== 12 ){
        return "Invalid phone number."
    }

}

console.log(phoneNumber2 ("aaaaaaaaaaaa"));

// bahasan

const phoneNumber = (input) => {
    if (typeof input !== "string" || input.length !== 12 ){
        return "Invalid phone number."
    }

    // Make sure the input all are numeric 0-9

    for(let i=0; i < input.length; i++ ){
        if(input[i]< "0" || input[i] > "9"){
            return "Invalid phone number."
        }
    }
    const temp = "62" + input.slice(1);
    console.log(temp);

    let template = "(xxxx)-xxxx-xxxxx";

    const splitInput  = temp.split("");

    splitInput.forEach((item) => {
        template = template.replace("x",item)
        
    });

    return template

}
    

    

    

console.log(phoneNumber ("628421234123"));

/*
    =============================================
    No 2

    buat parent class Product
    constructor = nama, berat, price,stok

    buat child class dari produk yaitu Buku dan Pakaian 
    constructor = super, data unik dari buku dan pakaian 

    buat class OnlineShop
    constructor = products dan cart (private)
    method : 
        - tambahProduk(produk): memasukkan produk ke arr products, kalau sudah ada dalam arr products
            return produk sudah ada dalam toko

        - tambahKeKeranjang(produk, jumlah) : memasukkan produk yang di pilih user ke arr cart. Harus validasi
            sudah ada apa belum dalam cart dan juga validasi ada tidak produknya di catalog, kalau yang di masukkan 
            melebihi stok return stok tidak mencukupi dan tampilkan juga stoknya

        - transaksi(uangUser, jarak) : menampilkan total pembayaran, beserta ongkir. example: 1km * 2000.
            tampilkan juga kembaliannya dan kosongkan cart jika berhasil melakukan transaksi. Harus ada validasi
            untuk uangUser tidak boleh kurang dari total pembayaran.

        - showCatalog : menampilkan isi catalog dari toko

        - showCart : menampilkan isi cart user
*/

class Product {
    name: string;
    weight: number;
    price: number;
    stock: number

    constructor(name:string, weight:number, price: number, stock: number){
        this.name = name;
        this.weight = weight;
        this.price = price;
        this.stock = stock;
    }
}

class Buku extends Product{
    author : string;
    constructor(name:string,
    weight: number,
    price: number,
    stock: number,
    author: string){
        super(name,weight,price,stock)
        this.author = author;
    }
}


class pakaian extends Product{
    size: string;
    color: string;
    constructor(name:string,
    weight: number,
    price: number,
    stock: number,
    size: string,
    color: string){
        super(name,weight,price,stock)
        this.size =size;
        this.color = color;
    }


}

class OnlineShop{
    product: Product[];
    cart: { product: Product; qty:number}[]

    constructor(){
        this.product =[];
        this.cart = [];
    }

    addProduct(product: Product){
        // cek dulu produk tsb sudah ada di dalam property products atau belum
        const existingProduct = this.product.find((p) => pakaian.name === product.name)
        
        //kalo sudah ada return "product sudah ada di dalam catalog"
        if (existingProduct){
            return "product already exist"
        }
        // kalau misalnya belum ada masukin datanya ke property products
        this.product.push(product);

        // return tambah produk/ catalog success
        return "add product/ catalog success";


    }

    addtoCart(product: Product, qty:number){
        // check dulu produknya ada gak di catalog
        const availableProduct = this.product.find((p) => p.name === product.name)
        // kalau misalnya gak ada di catalog,, return product not found
        // kalau misalnya ada productnya di catalog
        // cek lagi produknya di dalam cart  sudah ada atau belum
        // cek lagi stock produknya, apakah cukup dengan qty yang user mau
        // kalau cukup stok produknya langsung dikurangin sama qty nya
        // update qty produk tsb di dalam cart
        // kalau misalnya stoknya tidak cukup, return stok tidak cukup

    }

    transaction(){
    }

    showCart(){}

    showCatalog(){
        return {
            catalog: this.product,
            totalCatalog: this.product.length
        }
    }
}

