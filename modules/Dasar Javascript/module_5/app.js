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