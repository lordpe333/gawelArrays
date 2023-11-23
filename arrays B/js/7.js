let Damian = { name: "Damian", surname: "Mlodzik", id: 1 };
let Piotr = { name: "Piotr", surname: "Gawel", id: 2 };
let Daniel = { name: "Daniel", surname: "Kapusciok", id: 3 };

let users = [ Damian, Piotr, Daniel ];

let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));



alert( usersMapped[0].id ); 
alert( usersMapped[0].fullName ); 