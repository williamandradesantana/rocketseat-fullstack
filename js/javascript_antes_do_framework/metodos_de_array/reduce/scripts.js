/*
  O método reduce() é utilizado para reduzir um array
  a um único valor.  

  Parâmetros:
    - Array Original (values)
    - Acumulador (accumulator)
    - Valor de iteração (currentValue)
    - Valor inicial (0)
    - Index (index da iteração atual - opcional)
*/

const values = [1, 2, 3, 4, 5];
const sum = values.reduce((accmulator, currentValue, index) => {
  console.log("Acumulator: " + accmulator);
  console.log("Current value: " + currentValue);
  console.log("Index: " + index);

  console.log("Soma: ", accmulator + currentValue);
  console.log("#####");
  return accmulator + currentValue;
}, 0);

console.log(sum);
