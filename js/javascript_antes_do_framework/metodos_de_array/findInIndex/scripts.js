/*
  O método findIndex() retorna o índice no array do primeiro elemento
  que satisfazer a condição. Caso contrário, retorna -1, indicando que
  nenhum elemento passou no teste.
*/

const values = [1, 23, 45, 32, -1, 2];

// Obtendo primeiro índice do elemento maior que 4.
const index = values.findIndex((value) => value > 4);
console.log(index, values[index]);

// Exemplo de quando não encontra.
console.log(values.findIndex((value) => value > 50));
