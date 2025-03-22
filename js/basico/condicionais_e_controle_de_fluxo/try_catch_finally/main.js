// console.log(result);

/*
try {
  // Tenta executar um erro
  console.log(result);
} catch (e) {
  // Captura o erro para tratar
  console.error(e);

  console.log(
    "Não foi possível executar seu pedido tente novamente mais tarde!"
  );
} finally {
  console.log("Fim!");
} 
*/

let result = 0;

try {
  if (result === 0) {
    throw new Error("O valor é igual a zero");
  }
} catch (e) {
  console.log(e);
} finally {
  console.log("Fim!");
}
