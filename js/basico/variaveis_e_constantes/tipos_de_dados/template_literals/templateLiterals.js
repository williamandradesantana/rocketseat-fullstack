// Template literals (template strings, interpolação de strings)

let username = "William";
let email = "william@gmail.com";

// Passar mais de um parâmetros
console.log(username, email, "teste");

// Concatenar texto
let message = "Olá, " + username + ". Você conectou com o e-mail " + email;
console.log(message);

// Template literals
console.log(`
    Olá, ${username}. Você conectou com o e-mail
    ${email}.
    `);
