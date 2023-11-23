function sortByAge(arr) 
{
  arr.sort((a, b) => a.age - b.age);
}

let Damian = { name: "Damian", age: 2500 };
let Piotr = { name: "Piotr", age: 30 };
let Daniel = { name: "Daniel", age: 14 };

let arr = [ Damian, Piotr, Daniel ];

sortByAge(arr);

alert(arr[0].name); 
alert(arr[1].name); 
alert(arr[2].name); 