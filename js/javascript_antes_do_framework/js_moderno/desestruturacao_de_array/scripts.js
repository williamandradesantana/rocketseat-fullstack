/*
  Destructuring assignment (desestruturação)
  permite extrair dados de arrays ou objetos
  em variáveis distintas.
*/

const data = ["William", "william@gmail.com"];

// Desestruturando array.
const [username, email] = data;

console.log(username, email);

const fruits = ["Banana", "Apple", "Orange"];

// Desestrutar apenas o primeiro
const [banana] = fruits;
console.log(banana);

// Ignorando o primeiro na desestruturação.
const [, apple] = fruits;
console.log(apple);
// Ignorando o primeiro e o segundo na desestruturação.
const [, , orange] = fruits;
console.log(orange);
