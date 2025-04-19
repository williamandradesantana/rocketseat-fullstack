let message = "Estou estudando os fundamentos do JavaScript";

// Obtém a posição da palavra.
console.log(message.indexOf("estudando"));
console.log(message.indexOf("JavaScript"));

// Quando não encontra retorna -1.
console.log(message.indexOf("Javascript"));

// Verifica se a palavra existe na string.
console.log(message.includes("Estou"));
console.log(message.toLocaleLowerCase().includes("estou"));

console.log(message.toLocaleLowerCase().includes("html"));
