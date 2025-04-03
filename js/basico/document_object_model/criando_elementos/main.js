const guests = document.querySelector("ul");

const newGuest = document.createElement("li");
newGuest.classList.add("guest");

const guestName = document.createElement("span");

guestName.textContent = "William";

const guestSurname = document.createElement("span");
guestSurname.textContent = "Santana";

// Adiciona após o último filho
// newGuest.append(guestName);
// newGuest.append(guestName, guestName);

// Adiciona antes do primeiro filho
// newGuest.prepend(guestSurname);

// É mais simples que o append e aceita apenas um argumento
newGuest.appendChild(guestName);

// guests.append(newGuest);
guests.prepend(newGuest);
