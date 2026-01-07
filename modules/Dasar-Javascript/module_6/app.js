// Default value function...
function sayHello(name = "User", message = "Selamat Datang") {
     return `${message} ${name}`
}

console.log(sayHello("zumal"));


// Spread Operator....
let maxValue = Math.max(1, 2, 3, 4, 5, 6);
console.log(maxValue)

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let maxArrValue = Math.max(...arr)
console.log(maxArrValue);

// Bisa digunakan untuk menggabungkan 2 array atau lebih...
let arr2 = ["zumal", "clara", "zaara", "tarisa", "ayu"];
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8];
let arr4 = [...arr2, ...arr3];
console.log(arr4);


// Spread Operator juga bisa digunakan untuk object...
let obj = {
     name: "Zumal",
     age: 23,
}

let obj2 = {
     wife: "Tarisa",
     age_wife: 20,
}

let obj3 = { ...obj, ...obj2, status: "LDR" }
console.log(obj3);


// Rest Parameter...
// Akan mempermudah jika anda tidak ingin membuat banyak parameter dalam 1 function , bisa juga digunakan jika anda tidak mau membatasi inputan users maka gunaka  rest parameter...
function sumAll(...params) {
     let total = 0;
     for (let data of params) {
          total += data;
     }
     return total;
}

console.log(sumAll(1, 2, 3, 4));


let names = ["Zumal", "Rama", "Aldo", "Ellen", "Fadil", "Basir"];


function juara(satu, dua, tiga, ...sisa) {
     console.log(`Juara 1 : ${satu}`);
     console.log(`Juara 2 : ${dua}`);
     console.log(`Juara 3 : ${tiga}`);
     console.log(`Peserta lainnya : ${sisa}`);
     return "";
}

console.log(juara(...names));

// function daftar(names) {
//      names.forEach((v, i) => {
//           if (i < 3) {
//                console.log(`Juara ${i + 1} : ${v}`);
//           } else {
//                console.log(`Peserta Lainnya : ${v}`)
//           }
//      })
// }


// Destructuring Array...
// Memecah data array jadi beberapa variable...
let names2 = ["Zumal", "Rama", "Aldo", "Ellen", "Fadil", "Basir"];
const [user1, user2, user3, ...peserta] = names2;
console.log(user1, user2, user3, peserta);

// Destructuring Object...
let obj5 = {
     name: 'Zumal',
     age: 23,
     weight: 57.4,
     height: 170
}

let { name: name_2, age: age_2, weight: weight_2 } = obj5;
console.log(name_2, age_2, weight_2);

// Destructing Object dengan fungsi...
let obj9 = {
     name: `Zumal`,
     role: `Owner`,
     position: `CO Founder`
}

function say({ name, role }) {
     return `${name} ${role}`;
}


console.log(say(obj9));


// Bisa juga jiga array yg punya banyak object....
let arr10 = [
     { title: "Atack on Titan", rating: 92 },
     { title: "Boruto", rating: 60 },
     { title: "One Punch Man", rating: 87 },
     { title: "Spy x Family", rating: 98 },
     { title: "Bleach", rating: 81 },
     { title: "Naruto", rating: 90 }
]

let anime = arr10.map(({ title, rating }) => {
     console.log(`Anime : ${title} dengan rating : ${rating}`);
})












