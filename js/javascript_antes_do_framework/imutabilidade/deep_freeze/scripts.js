const book = {
  title: "Objetos Imutáveis",
  category: "JavaScript",
  author: {
    name: "William",
    email: "wbs@gmail.com",
  },
};

function deepFreeze(object) {
  // Obtém um array com todas as propriedades de um objeto.
  const props = Reflect.ownKeys(object);

  // Itera sobre todas as propriedades do objeto.
  for (const prop of props) {
    // Obtém o valor associado a propriedade atual.
    const value = object[prop];

    // Verifica se o valor é um objeto ou função para continuar aplicando o deepFreeze em objetos aninhados.
    if ((value && typeof value === "object") || typeof value === "function") {
      deepFreeze(value);
    }
  }

  // Retorna objeto congelado.
  return Object.freeze(object);
}

deepFreeze(book);

book.category = "Category";
book.author.name = "João";

console.log(book);
