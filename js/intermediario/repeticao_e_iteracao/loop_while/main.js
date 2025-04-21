// WHILE: executa até que a condição seja VERDADEIRA.

let execute = true;

while (execute) {
  let response = window.prompt("Deseja continuar: 1 (Sim) ou 2 (Não)");

  if (response == 2) {
    execute = false;
  }
}

console.log("Segue o fluxo...");
