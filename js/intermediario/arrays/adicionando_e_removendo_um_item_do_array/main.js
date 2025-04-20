let users = [];
console.log(users);

// Adiciona um item no final do array.
users.push("William");
users.push("Maria");
users.push("João");

// Adiciona no início do array.
users.unshift("Ana");

// Remove o item no início do array. (Ana)
users.shift();
// Remove item do final do array. (João)
users.pop();

console.log(users);
