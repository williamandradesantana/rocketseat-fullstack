/*
  O método every() testa se todos os elementos do array
  passam na condição e retorna o valor Boolean.
*/

// Exemplo array de idades.
const ages = [15, 30, 39, 29];

// Verfica se todas as idades são maiores ou igual a 18.
const result = ages.every((age) => age >= 18);

console.log(result);
