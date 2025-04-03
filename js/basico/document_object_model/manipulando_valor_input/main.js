const input = document.querySelector("input");
const form = document.querySelector("form");

input.addEventListener("input", (event) => {
  const value = input.value;

  const regex = /\D+/g;

  // Retorna o padrão encontrado na string.
  // console.log(value.match(regex));

  // Testa se atende o padrão.
  // const isValid = regex.test(value);
  // console.log(isValid);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const value = input.value;
  const regex = /\D+/g;

  if (regex.test(value)) {
    console.log(value);
  } else {
    alert("Padrão não encontrado!");
  }

  // const value = input.value.replace(regex, "x");
  // console.log(value);
});
