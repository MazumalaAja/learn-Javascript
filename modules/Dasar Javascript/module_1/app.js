// Console.log untuk menampilkan output...
console.log("Hello world");

// Tipe data di javascript ada String , Number , Boolean , Undefined , Object , Null , Symbol

// => Number : merupakan tipe data angka , angka sendiri memiliki bebrapa jenis , ada bilangan bulat , ada bilangan decimal , ada bilangan positif dan negatif...

// Integer bilangan biasa yang positif
console.log(1);

// Bilangan Decimal
console.log(2.4);

// Bilangan Negatif
console.log(-2);

// => String : Simplenya string apapun di diantara tanda petik '' / "" / `` , bisa juga dianggap text , tapi jika ada angka di hapit 2 ' / " / ` maka akan menjadi string...

// String dengan ''
console.log('Mazumala');

// String dengan ""
console.log("fasle");

// String dengan ``
console.log(`23`);

// => Boolean :Tipe data hanya dengan 2 nilai (false atau true)

// Boolean nilai true
console.log(true);

// Boolean nilai false
console.log(false);

// => Undefined : merupakan data atau reprensentasi bahwa sebuah sesuatu itu kosong...
console.log(undefined);

// => Null : merupakan tipe data yang bukan mirip dengan undefined tapi dia memang sengaja dikosongkan 
console.log(null);

// Symbol : Merupakan tipe data yang itemnya memiliki identitas unik
console.log(Symbol("id"));

// => Object : merupakan tipe data yang di dalamnya ada key dan value 
const obj = {name: "zumal" , age: 23};
console.log(obj);

// Untuk mengecheck apa yang diinput itu type datanya apa maka gunakan  typeof...
console.log(typeof 23);

// Selanjutnya Variable : merupakan wadah yang dapat menyipan suatu nilai dan dapat dipanggil kapan pun...
// Cara membuat variable : cara membuat variable sendiri ada 3 yaitu menuliskan keywor lef / var / conts...
// var : merupakan cara lama dalam membuat variable , value atau nilainya sendiri dapat di ubah-ubah...
// let : cara baru dalam membuat variable , sama seperti var valuenya bisa diubah-ubah...
// const : cara membuat variable tapi dia tidak boleh diganti valuenya tetap...
// Penulisan variable : tidak boleh didahului angka "let 1user" , tidak boleh ada simbol selain _ "lef nama@" , tidak buleh ada spasi "let nama saya"

// Variable dengan var
var namaDepan = "Muhammad";
console.log(namaDepan);

// Variable dengan let
let namaTengah = "Azumal";
console.log(namaTengah);

// Variable dengan const
const namaBelakang = "Aulia";
console.log(namaBelakang);

// => Method atau fungsi bawaan Javascript untuk memanipulasi string yang menurut saya penting...
// toUpperCase() : membuat string jadi huruf besar
// toLowerCase() : membuat string jadi huruf kecil
// trim() : menghilangkan spasi kiri kanan

console.log("ClaRa FLa AuDia".toLowerCase());
console.log("ClaRa FLa AuDia".toUpperCase());
console.log(" ClaRa FLa AuDia ".trim());

// indexOf() : untuk menjadi posisi dari huruf awal suatu kata atau mengetahui index suatu string
let hello = "Hello World";
console.log(hello.indexOf("World"));

// slice : untuk mengambil sebagian string
// slice(mulai dari index berapa , sampai index berapa)
let pharse = "Hallo Zumal Apa Kabar ?"
console.log(pharse.slice(0,10));

// replace : untuk mengganti kata  dari suatu kalimat 
// replace(kata yang mau diganti , kata yang menjadi pengganti)
let pharse_2 = "Saya suka belajar PHP"
console.log(pharse_2.replace("PHP" , "Javascript"));




