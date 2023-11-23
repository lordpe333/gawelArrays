function getAverageAge(users) 
{
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

let damian = { name: "Damian", age: 10 };
let piotr = { name: "Piotr", age: 12 };
let daniel = { name: "Daniel", age: 15 };

let arr = [ damian, piotr, daniel ];

alert( getAverageAge(arr) ); 