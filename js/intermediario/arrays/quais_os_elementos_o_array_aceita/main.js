let myArray = [
  "Um texto",
  10,
  true,
  function () {
    console.log("Função dentro do array");
  },
  {
    name: "William",
    email: "william@email.com",
  },
];

// Texto
console.log(myArray[0]);

// Número
console.log(myArray[1]);

// Boolean
console.log(myArray[2]);

// function
myArray[3]();

// Object
console.log(myArray[4], myArray[4].name, myArray[4].email);
