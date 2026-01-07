// function merupakan potongan kode yang bisa dieksekusi kembali...
function dadu() {
     let data = Math.floor(Math.random() * 6) + 1;

     while (data === 6) {
          data = Math.floor(Math.random() * 6) + 1;
          console.log("6 ditemukan");
     }

     console.log(data);
}

// Panggil function...
dadu();

// Funtion punya argumen dan parameter
// nilai pada saat memanggil fungsi disebuat argumen : dadu(12) , dan pada saat membuat fungsi ada semacam variable maka disebut parameter function dadu(param)...
function sayHello(name) {
     name == undefined ? name = 'Users' : null;
     console.log(`Hallo ${name}`)
}

sayHello("Zumal");

// Argumen harus sesuai dengan parameternya misalnya parameter ada 2 maka argumen juga harus dua...
function luasPersegiPanjang(a, b) {
     console.log(a * b);

}

luasPersegiPanjang(12, 10);

// Function expression...
// Merupakan shorcut dari function declaration tapi berbeda dengan function declaration function expression bukan bloked scoupe tapifunction expression itu blocked scoupe...
let pangkat = function (a, b) {
     return a ** b;
}

console.log(pangkat(2, 5));

// Menjadikan function sebagai argument...
function lemparDadu() {
     return Math.floor(Math.random() * 6) + 1;
}

let double = function (param) {
     return param() * 3;
}

console.log(double(lemparDadu))

// Method : merupakan funtion yang menjadi properti dari object...
// Gunakan this jika ingin menggunakan properti sebagai value dari methodnya
let obj = {
     title: "Genarate Random color",
     generate: function () {
          let value = Math.floor(Math.random() * 3) + 1
          let result;
          value === 3 ? result = "Yellow" : null;
          value < 3 ? result = "Red" : null;
          console.log(`${this.title} di jalankan...`)
          return result;
     }
}

console.log(obj.generate());


// arrow function...
// Merupakan versi profesional dan ringkas dari function  biasa...
const sayHellos = (params) => {
     return `Hello ${params}`
}

// Jika hanya 1 parameter bisa tanpa kurung bahkan jika hanya melakukan 1 aksi ga perlu return...
const sayBye = params => `Bye ${params}`;

console.log(sayBye("Rama"))

// Implisit return pada arrow function jadi bisa mengembalikan nilai tanpa return...
const randomNumber = () => (
     Math.floor(Math.random() * 10) + 1
);

console.log(randomNumber());

// SetTimeout()...
// Digunakan jika ingin memberikan jeda sebelum menjalankan baris kode...
console.log("Hallo")
setTimeout(() => {
     console.log("5 detik berlalu...")
}, 5000)


// SetInterval() : untuk menjalankan kode terus - menerus atau berkali-kali
// setInterval(() => {
//      console.log("Hallo")
// }, 1000);

// Method map dan filter...
// map : digunakan untuk mengambil item pada array tapi berbeda dengan foreach map mengembalikan array dan foreach tidak mengembalikan array
// Map digunakan untuk memfilter nilai dan membuat array baru lagi...

let datas = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let doubles = datas.forEach(e => { return e });
let doubles2 = datas.map(e => { return e > 5 });
let doubles3 = datas.filter(e => { return e > 5 });
console.log(doubles);
console.log(doubles2);
console.log(doubles3);


// Every dan some method
// every : akan mengecek dan menghasilakan nilai true jika semua data di array sesuai kriteria,jika tidak akan bernilai false...
// some : sama seperti every tapi dia akan menghasilkan true jika salah satu itu ada yang sesuai  kriteria...
let array2 = [90, 56, 77, 88, 98, 12, 34, 56, 78];

// Apakah ada yang lulus...
let isGraduate2 = array2.every(v => v > 80);
let isGraduate = array2.some(v => v > 80);
console.log(isGraduate);
console.log(isGraduate2);

// Reduce...
// Lumayan sulit menjelaskan riduce tapi dia bisa melakukan banyak hal jadi di reduce ada namanya (akumulator , currentValue)..
// Reduce hanya mengembalikan single valu bukan array..

// Jika anda ingin mencari list anime terbaik...
let datas2 = [
     { title: "Atack on Titan", rating: 92 },
     { title: "Boruto", rating: 60 },
     { title: "One Punch Man", rating: 87 },
     { title: "Spy x Family", rating: 98 },
     { title: "Bleach", rating: 81 },
     { title: "Naruto", rating: 90 }
]

// Bisa digunakan untuk mencari anime terbaik dan terburuk
let animeTerbaik = datas2.reduce((bestAnime, currentAnime) => {
     return bestAnime.rating < currentAnime.rating ? bestAnime = currentAnime : bestAnime;
})
let animeTerburuk = datas2.reduce((lowerAnime, currentAnime) => {
     return lowerAnime.rating > currentAnime.rating ? lowerAnime = currentAnime : lowerAnime;
})
console.log(animeTerbaik);
console.log(animeTerburuk);

// Bisa menjuhmlahkan semua nilai atau mencari rata-rata...
let values = [23, 34, 5, 66, 7, 88, 9, 56, 90];
let total = values.reduce((a, c) => a + c, 0);
let average = values.reduce((a, c) => a + c / values.length, 0);
console.log(`Rata- rata : ${average} \n Total : ${total}`);









