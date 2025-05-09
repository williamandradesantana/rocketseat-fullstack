class MyCustomError {
  constructor(message) {
    this.message = "Classe de erro customizada: " + message;
  }
}

try {
  throw new Error("Ocorreu um erro");
  throw new MyCustomError("Ocorreu um erro");
} catch (error) {
  if (error instanceof MyCustomError) {
    console.log(error.message);
  } else {
    console.log("Não foi possível executar!");
  }
}
