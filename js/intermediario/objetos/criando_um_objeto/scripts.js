/*

    Objeto
        - Uma coleção de dados e/ou funcionalidades;
        - Podem ter propriedades e métodos;
*/

// Cria um objeto vazio

const obj = {};
console.log(obj);
console.log(typeof obj);

// Cria um objeto com prorpriedades e métodos
const user = {
  email: "william@email.com",
  age: 20,
  name: {
    first_name: "William",
    surname: "Santana",
  },
  address: {
    street: "Rua X",
    number: 1223,
    city: "Aracaju",
    postal_code: "12345-633",
  },
  message: function () {
    console.log(`Olá, William`);
  },
};

console.log(user.email);
