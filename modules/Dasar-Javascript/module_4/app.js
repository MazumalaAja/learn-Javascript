// Looping atau perulanagan...
// Digunakan untuk mejalankan baris kode dengan lebih dari 1 kali bahkan sampai tak terhingga tanpa anda harus menulis kode sebanyak perulangan , jadi cukup 3 - 5 baris dan anda dapat melakukan perulangan berapapun...

// while()
{
     let i = 0;
     while (i <= 10) {
          console.log("While ke-" + i);
          i++;
     };
}

// Do while()
{
     let i = 0;
     do {
          console.log(`Do While ke-${i}`)
          i++;
     } while (i <= 10);
}

// for()
for (let i = 0; i <= 10; i++) {
     console.log("For ke-" + i);
}

// Menampilkan data dari array dengan perulangan...
let fruit = ["manggo", "grape", "pineapple"];
for (let i = 0; i < fruit.length; i++) {
     console.log(fruit[i]);
}

// Nested loop atau perulangan bersarang atau perulangan dalam perulangan...
let zumal = "ZUMAL";

for (let i = 0; i < zumal.length; i++) {
     console.log(`Loop : ${i}`);
     for (let j = 0; j < zumal.length; j++) {
          console.log(`Get : ${zumal[j]}`);
     }
}

// Mengambil data dari nested array dengan nested loop...
let classmate = [
     ["clara", "kei"],
     ["zaara", "rinan", "ayu"],
     ["ririn", "clara", "sabrina"],
]

for (let i = 0; i < classmate.length; i++) {
     const datas = classmate[i];
     for (let j = 0; j < datas.length; j++) {
          console.log(`siswa ${i + 1} : ${datas[j]}`)
     }
}

// For of...
let calon = ["Tarisa", "Zaara", "Ayu"];
for (let [v, i] of calon) {
     console.log(`pacar ke-${i} : ${v}`);
}


// for in ...(untuk object)
let objx = {
     zumal: 10,
     Rama: 9,
     Aldo: 10,
     Risky: 6,
     Galih: 9,
}
for (let data in objx) {
     console.log(`${data} dengan score : ${objx[data]}`)
}