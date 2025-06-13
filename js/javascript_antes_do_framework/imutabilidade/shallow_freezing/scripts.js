const book = {
  title: "Objetos Imutáveis",
  category: "JavaScript",
  author: {
    name: "William",
    email: "wbs@email.com",
  },
};

// O JavaScript em si não impõe restrições à modificação dos objetos.
// book.category = "html";

// Congela o objeto e impede modificação.
Object.freeze(book);

book.category = "css"; // Não modifica.

// O Object.freeze() não impede modificações profundas em objetos aninhados. (shallow freezing)
book.author.name = "João"; // Modifica.

console.log(book);
