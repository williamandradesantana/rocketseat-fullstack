/*
  O método filter() cria um novo array com todos os
  elementos que passaram na condição
*/

// Filtrando palavras que tenham mais de três letras.
const words = ["JavaScript", "HTML", "CSS", "Web"];

const result = words.filter((word) => word.length > 3);
console.log(result);

const products = [
  { description: "teclado", price: 150, promotion: true },
  { description: "Mouse", price: 70, promotion: false },
  { description: "Monitor", price: 900, promotion: true },
];

// Exemplo de um filtro de produtos em promoção.
const promotion = products.filter((product) => product.promotion === true);
const productsLessThanPrice100 = products.filter(
  (product) => product.price < 100
);
console.log(promotion, productsLessThanPrice100);
