function asyncFunction() {
  return new Promise((resolve, reject) => {
    // Simula uma operação assíncrona.
    setTimeout(() => {
      const isSucess = true;

      if (isSucess) {
        resolve("A operação foi concluída com sucesso!");
      } else {
        reject("Algo de errado!");
      }
    }, 3000);
  });
}

// Visualizando que o retorno é uma promise.
// console.log(asyncFunction());

console.log("Exectundo função assíncrona.");
// const response = asyncFunction();
// console.log(response);

// Executando função assíncrona.

asyncFunction()
  .then((response) => console.log("Sucesso: ", response))
  .catch((error) => console.log("Error: ", error))
  .finally(() => console.log("Fim da execução"));
