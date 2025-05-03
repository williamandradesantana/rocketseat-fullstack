let date = new Date("2025-12-31T12:00:00");

console.log(date.toLocaleString());

console.log(date.toLocaleString("en"));

// Exibi data e hora em horários diferentes.
console.log(
  date.toLocaleString("pt-BR", {
    dateStyle: "short",
  })
);

console.log(
  date.toLocaleString("pt-BR", {
    dateStyle: "long",
  })
);

console.log(
  date.toLocaleString("pt-BR", {
    dateStyle: "medium",
  })
);

console.log(
  date.toLocaleString("pt-BR", {
    dateStyle: "full",
  })
);

console.log(
  date.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  })
);

const amount = 12.5;
console.log(
  amount.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
);
