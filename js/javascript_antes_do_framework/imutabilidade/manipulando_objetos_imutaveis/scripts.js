const book = {
  title: "Objetos Imutáveis",
  category: "JavaScript",
  author: {
    name: "William",
    email: "wbs@email.com",
  },
};

const updatedBook = {
  ...book,
  title: "Criando um Frontend moderno com HTML",
  category: "HTML",
  type: "Programming",
};

// Original intacto.
console.log(book);

// Modificado.
console.log(updatedBook);

// Utilizando operador de desestruturação (rest operator) para remover propriedades.
const { category, ...bookWithoutCategory } = book;
console.log(bookWithoutCategory);
