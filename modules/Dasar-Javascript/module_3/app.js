// Belajar tentang object...
// Sederhananya object merupakan array yang indexnya tidak hanya angka tapi bisa di atur atau custom...
const obj = {
     nama:"Zumal",
     "nama panjang" :"Muhammad Azumal Aulia",
     age:23,
     weight:58.2,
};

console.log(obj);

// Cara memanggil data object 
console.log(obj.weight);
console.log(obj["nama"]);
console.log(obj["nama panjang"]);

// Onject besarang...
let carts = {
     product_1 :["Oreo" , "Aqua" , "Beng-beng"],
     product_2 :["senka" , "facetology"],
     product_3 :[
          {infinix:["laptop" , "handphone"]},
          {apple:["watch" , "macbook" , "iphone"]},
     ]
}

console.log(`Nama saya : Zumal \n Hp saya : ${carts.product_3[1].apple[2]} \n laptop saya : ${carts.product_3[0].infinix[1]}`);