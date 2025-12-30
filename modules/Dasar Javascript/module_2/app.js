// => Array : Merupakan tipe data Object , karena itu Array bukan tipe data , melainkan struktur data...
// Seperti wadah yang bisa menyimpan data apapun...
// Cara membuat array ada 2...
// lef arr = []...
// ler arr =  new Array(...);
const arr = ["Mazumala" , false , 230];
const arr_2 = new Array("Mazumala" , false , 230);
 console.log(arr);
 console.log(arr_2);

//  Untuk mengakses array hanya perlu lakukan arr[index keberapa]
console.log(arr[2]);

// Bisa juga mengubah isi array dengan ini...
arr_2[2] = "Hallo";
console.log(arr_2);

// Bisa juga menambahkan data ke array dengan let arr[3] = true...
arr[10] = 1234;
arr[3] = false;
console.log(arr);

// Beberapa method Javascript yang bisa memanipulasi array...
// Untuk menambahkan array...
// Push() : menambahkan array ke paling akhir...
let arr_3 = [12];
arr_3.push("Clara");
console.log(arr_3);

// unshift : menambahkan item ke nilai awal...
arr_3.unshift(false);
console.log(arr_3);

// Untuk menhapus data
// pop() : menghapus data pada urutan paling akhir...
arr_3.pop();
console.log(arr_3);

// shift() : untuk menghapus data dari urutan paling akhir...
arr_3.shift();
console.log(arr_3);

// Untuk menggabungkan array
// concat() : harus membuat array baru dengan menambahkan array-array sebelumnya...
let array = [1,2,3,4,5,6];
let array2 = [7,8,9,10];
let array3 = [11,12,13,14,15];
let array4 = array.concat(array2,array3);
console.log(array4);

// mencari index dari suatu data di array...
console.log(array4.indexOf(11));

// mencari nilai dari array klo ada true klo engga false...
console.log(array4.includes("zumal"));

// Untuk mengurutkan alfabet maupung angka...
// untuk angka yag diperhatikan dia mengurutkan secara 1-9 jadi dalam urutanya 2 dan 12 maka lebih dahulu 12 karena depannya 1
let int = [1,23,4,5,78,9];
let alf = ["x","a","d","k","z"];
console.log(int.sort());
console.log(alf.sort());

// Untuk menhapus index tertentu  menambahkan data baru...
// splice(index keberapa,berapa item yg dihapus,tambahkan item apa(opsional))...
let moon = ["jan" , "feb" , "march" , "april" , "jun" ];
moon.splice(4,1);
moon.splice(3,1,"jun","jul","aug");
moon.splice(2,4,"march");
console.log(moon);

// reverse membalikan urutan...
let names = ["zumal" , "clara" , "tarisa"]
console.log(names.reverse());

// Mengubah array jadi string dn bisa mengatus penghubungnya
console.log(names.join("-"));
console.log(names.join(""));
console.log(names.join(" "));
console.log(names.join(" * "));






