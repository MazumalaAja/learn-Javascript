const times = (a, b) => a * b;
const root = a => times(a, a);
const pytagoras = (a, b, c) => root(a) + root(b) === root(c);

console.log(pytagoras());


function GetApi(url, success, failure) {
     let delay = (Math.floor(Math.random() * 10) + 1) * 1000;
     if (delay > 4000) {
          failure(`Connection failed => Delay : ${delay} URL : ${url}`);
     } else {
          success(`Conection success => Delay : ${delay} URL : ${url}`);
     }
}

GetApi("Https://localhost:3000/api", (message) => console.log(message), (message) => console.error(message));


// Menggunakan promise...
function getAPI(URL) {
     let delay = Math.floor(Math.random() * 4500) + 500;
     return new Promise((resolve, reject) => {
          setTimeout(() => {
               if (delay > 4000) {
                    reject(`Time out : ${delay}ms`);
               } else {
                    resolve(`Conectionn success : ${delay}ms`);
               }
          }, delay)
     })
}

getAPI(`YouTube.com`).then((message) => console.log(message)).catch(err => console.log(err));


// Mengambil data jokes dari api sungguhan...
async function getApi(params) {
     try {
          let response = await fetch(params);
          const data = await response.json();
          return data;
     } catch (err) {
          console.log(err);
     }
}


let arr = getApi(`https://official-joke-api.appspot.com/jokes/ten`);
arr.then(response => {
     response.forEach(v => {
          console.log("Setup : " + v.setup);
          console.log("Puncline : " + v.punchline);
     });
}).catch(err => console.log(err))




