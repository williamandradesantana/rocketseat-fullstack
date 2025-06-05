/*
  Spread (espalhar) permite que um objeto
  iterável, como uma expressão do array ou
  uma string seja expandido para ser usado
  onde zero ou mais argumentos.
*/

const numbers = [1, 2, 3];
console.log(numbers);

// spread
console.log(...numbers);

// Criando objeto
const data = [
  {
    name: "Rodrigo",
    email: "rodrigo@email.com",
    avatar: "r.png",
  },

  {
    name: "William",
    email: "william@email.com",
    avatar: "w.png",
  },
];

console.log(data);

// Utilizando o spread com array de objetos.
console.log(...data);
