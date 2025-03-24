// Função anônima (função que não possui nome)

const showMessage1 = function () {
  return "Hello World!";
};

console.log(showMessage1());

const showMessage2 = function (message, name) {
  return message + name;
};

console.log(showMessage2("Hello World! ", "Wbs"));
