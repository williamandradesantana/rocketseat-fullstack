// console.log(user);
// var user = "Redrigo";

// Hoisting
// var user;

// console.log(user); // undefined

// Escopo global
var email = "joao@email.com";

{
  // Escopo local
  console.log(email);
}

{
  var age = 18;
}

console.log(age);

let address = "Rua X";
{
  address = "Rua Y";
  console.log(address);
}
