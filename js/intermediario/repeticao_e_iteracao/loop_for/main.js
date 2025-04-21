/*
    FOR repete até que uma condição específica seja falsa.

    - variável de controle.
    - condição.
    - incremento ou decremento da variável de controle.
*/

for (let step = 0; step < 10; step++) {
  console.log(step);
}

// Exemplo de tabuada
let number = 7;

for (let i = 0; i < 11; i++) {
  let result = i * number;
  console.log(`${number} x ${i} = ${result}`);
}
