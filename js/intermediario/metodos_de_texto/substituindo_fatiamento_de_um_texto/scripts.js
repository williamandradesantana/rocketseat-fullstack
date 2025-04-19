let message = "Estou estudando os fundamentos do JavaScript.";

// Substituir parte de um texto.
console.log(
  message.replace("os fundamentos do JavaScript", "Métodos de texto de String")
);
console.log(message);

// Extraindo uma parte da string (start, end)
console.log(message.slice(0, 5));
console.log(message.slice(6, 30));

// Extraindo uma parte da string de trás para frente.
console.log(message.slice(-11));

let textWithSpace = " Texto de exemplo    ";
console.log(textWithSpace);
console.log(textWithSpace.length);
// Remove espaços em brando do início e final da string.
console.log(textWithSpace.trim());
console.log(textWithSpace.trim().length);
