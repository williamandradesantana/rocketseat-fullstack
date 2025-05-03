let date = new Date("2024-07-02T14:00:00");

console.log(date);

// Exibi a data e hora no formato local.
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());

// Exibi data e hora no formato escolhido.
console.log(date.toLocaleDateString("pt-BR"));
console.log(date.toLocaleTimeString("pt-BR"));
