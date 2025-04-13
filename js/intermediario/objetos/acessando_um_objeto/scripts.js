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

// Acessando propriedades e métodos usando a notação de ponto.
console.log(user.email);

// Acessando propriedades de objetos.
console.log(user.name.first_name);

// Executando método do objeto.
user.message();

// Anotação de colchetes
console.log(user["email"]);
console.log(user["name"]["first_name"]);
user["message"]();
