const address1 = {
  street: "Av. Brasil",
  number: 20,
};

// Isso não é uma cópia. É uma referência.
// const address2 = address1;
// address2.number = 30;

// Criando um novo objeto utilizando as propriedades e valores de address1. (Opção 1)
// const address2 = { ...address1 };
// address2.number = 30;

const address2 = { ...address1, number: 30 };
console.log(address1, address2);

// Exemplo com array.

const fruits1 = ["Apple", "Orange"];
// const fruits2 = fruits1;

const fruits2 = [...fruits1];
fruits2.push("Watermelon");

console.log(fruits1, fruits2);
