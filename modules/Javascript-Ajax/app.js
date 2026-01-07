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