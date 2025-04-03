const form = document.querySelector("form");

form.onsubmit = (event) => {
  event.preventDefault();
  console.log("Você fez o submit do formulário #1");
};

form.onsubmit = (event) => {
  event.preventDefault();
  console.log("Você fez o submit do formulário #2");
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Você fez o submit do formulário #3");
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Você fez o submit do formulário #4");
});
