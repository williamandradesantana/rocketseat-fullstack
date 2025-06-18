function asyncFunction() {
  return new Promise((resolve, reject) => {
    // Simula uma operação assíncrona.
    setTimeout(() => {
      const isSucess = false;

      if (isSucess) {
        resolve("A operação foi concluída com sucesso!");
      } else {
        reject("Algo de errado!");
      }
    }, 3000);
  });
}

/* 
const fetch = async() => {
  const response = await asyncFunction();
  console.log(response);
}
*/

async function fetch() {
  try {
    const response = await asyncFunction();
    console.log("Sucesso: ", response);
  } catch (error) {
    console.log("Erro: ", error);
  } finally {
    console.log("Fim da execução");
  }
}
fetch();
