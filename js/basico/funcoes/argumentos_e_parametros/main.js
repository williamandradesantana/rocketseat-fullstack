/*

 - Parâmetros: é a variável (escopo da função) que irá
  receber um valor em uma função.
  
  - Argumentos: é o valor que é passado para a função.
*/

// let username = "João";

// Passando parâmetro
function message(username) {
  console.log("Olá ", username);
}

// Passando argumento
message("Rodrigo");
message("Ana");

// console.log(username);

function sum(a, b) {
  console.log(a + b);
}

sum(10, 20);
sum(7, 3);

// Definindo um valor (argumento) padrão.
function joinText(text1, text2 = "", text3 = "") {
  console.log(text1, text2, text3);
}

joinText("W", "B", "S");
joinText("B", "W", "A");

joinText("Rodrigo");
