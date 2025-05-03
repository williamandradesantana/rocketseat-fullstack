let date = new Date("2024-07-05T14:30:00");

// Formata para o dia sempre ter 2 dígitos.
let day = date.getDate().toString().padStart(2, "0");
console.log(day);

// Formata para o mês sempre ter 2 dígitos.
let month = date.getMonth().toString().padStart(2, "0");
console.log(month);

let year = date.getFullYear();
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

console.log(`${day}/${month}/${year} às ${hour}:${minutes}`);
