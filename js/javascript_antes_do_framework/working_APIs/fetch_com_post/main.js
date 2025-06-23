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

const form = document.querySelector("form");
const productName = document.getElementById("name");
const productPrice = document.getElementById("price");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  await fetch("http://localhost:3333/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: new Date().getTime().toString(),
      name: productName.value,
      price: Number(productPrice.value),
    }),
  });

  await fetchProducts();
});
