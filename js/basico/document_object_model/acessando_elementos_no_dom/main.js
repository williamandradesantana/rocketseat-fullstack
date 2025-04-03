// Visualizar conteúdo do document.
// console.log(document);

// Obter título da página
let title = document.title;
console.log(title);

// Acessando elemento pelo ID (SELETOR ID)
const guest = document.getElementById("guest-2");
console.log(guest);

// Mostra as propriedades do objeto
console.dir(guest);

// Acessando pela classe (SELETOR CLASS)
const guestsByClass = document.getElementsByClassName("guest");
console.log(guestsByClass);

// Exibir primeiro elemento da lista
console.log(guestsByClass.item(0));
console.log(guestsByClass[0]);

// Selecionar por lista de elementos pela tag
const guestsByTag = document.getElementsByTagName("li");
console.log(guestsByTag);
