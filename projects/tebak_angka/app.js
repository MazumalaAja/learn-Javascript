// Game tebak angka dengan javascript...

// user input : nilai max...
let max = Number(prompt("Masukkan nilai maksimum"));
while (max <= 1) {
     alert("Tidak boleh memasukkan nilai 1 kebawah")
     max = Number(prompt("Masukkan nilai maksimum : "));
}

// computer memilih nilai...
let secret = Math.floor(Math.random() * max) + 1;
alert("Komputer telah membuat pilihan ☢")

let confirmed = true;

while (confirmed) {
     let input = Number(prompt("Masukkan angka tebaan mu :"));
     input < secret ? alert("Terlalu kecil") : null;
     input > secret ? alert("Terlalu besar") : null;
     if (input === secret) {
          alert("Wah tebakan kamu benar , angka pilihan komputer adalah " + secret);
          confirmed = confirm("Mau main lagi ga ?")
          if (confirmed) {
               secret = Math.floor(Math.random() * max) + 1;
               alert("Komputer telah membuat pilihan ☢")
          }
     }
}

alert("Terima kasih")