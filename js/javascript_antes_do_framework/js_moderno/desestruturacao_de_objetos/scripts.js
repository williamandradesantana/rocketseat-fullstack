/*
  Destructuring assignment (desestruturação)
  permite extrair dados de arrays ou objetos
  em variáveis distintas.
*/

const product = {
  description: "teclado",
  price: 150,
};

const { description, price } = product;
console.log(description, price);

function newProduct({ description = String, price = Number }) {
  console.log("--- New Product ---");
  console.log(description, price);
}

newProduct({ description: "Mouse", price: 79 });
