/*
    O método map() chama a função callback recebida por
    parâmetro para cada elemento do Array original, em ordem, e
    constrói um novo array com base nos retornos de cada chamada.
    E no final, devolve o novo array.
*/

const products = ["Teclado", "Mouse", "Monitor"];

// Percorro itens do array.
products.map((item) => {
  console.log(item);
});

// Sintaxe reduzida.
products.map((products) => console.log(products));

// Utilizando o array retornado.
const formattedObject = products.map((product) => {
  //   return product.toUpperCase();

  return {
    id: Math.random(),
    description: product,
  };
});

console.log(formattedObject);

const formattedUpperCase = products.map((product) => {
  return product.toUpperCase();
});

console.log(formattedUpperCase);
