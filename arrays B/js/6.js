let Damian = { name: "Damian", age: 14 };
let Piotr = { name: "Piotr", age: 10 };
let Daniel = { name: "Daniel", age: 3 };

let users = [ Damian, Piotr, Daniel ];

let names = users.map(item => item.name);

alert( names );