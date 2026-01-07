const data = `{
     "name":"Mazumala",
     "age":23,
     "height":170,
     "weight":58
}`

const data2 = {
     name: "zumal",
     age: 23,
     height: 170,
     weight: 58
}

// Mengubah JSON jadi Object javascript...
console.log(JSON.parse(data));


// Mengubah Object javascript jadi JSON...
console.log(JSON.stringify(data2));


async function getApi(params) {
     const data = await fetch(params);
     const response = await data.json();
     response.data.forEach(element => {
          console.log(element.nomor);
          console.log(element.nama);
          console.log(element.namaLatin);
     });
}

// getApi("https://equran.id/api/v2/surat");


// Menggunakan Axios...
axios.get("https://equran.id/api/v2/surat").then(res => console.log(res)).catch(err => console.log(err.message)
);