// Utilizando fetch
// fetch("http://localhost:3333/products")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// Utilizando async e await
async function fetchProducts() {
  const url = "http://localhost:3333/products";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Não conseguiu listar os produtos");
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}

fetchProducts();
