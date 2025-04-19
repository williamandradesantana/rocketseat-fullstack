const cretidCard = "1234567812344928";
// console.log(cretidCard.length);

// Pega os 4 últimos dígitos.
const lastDigits = cretidCard.slice(-4);
// console.log(lastDigits);

// O padStart preenche a string no início.
const maskedNumber = lastDigits.padStart(cretidCard.length, "X");
console.log(maskedNumber);

// O padEnd preenche a string no final.
const number = "123";
console.log(number.padEnd(10, "#"), number.padEnd(10, "#").length);
