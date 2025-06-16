// setInterval() - executa uma função após um intervalo de tempo específico.

let value = 10;
const interval = setInterval(() => {
  console.log(value--);

  if (value === 0) {
    // Interrompe o intervalo de execuções.
    clearInterval(interval);
  }
}, 1000); // Tempo em milissegundos.
