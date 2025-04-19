let message = "Estou estudando os fundamentos do JavaScript";
console.log(message);

// Comprimento de uma string.
console.log(message.length);

let password = "12345";

if (password.length < 6) {
  console.log("A senha deve ter ao menos 6 caracteres");
}

// Quantos dígitos em um número?
let value = 1234;
console.log(value);
console.log(String(value).length);
console.log(value.toString().length);
