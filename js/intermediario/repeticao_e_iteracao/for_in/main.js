// for...in executa iterações a partir de um objeto e percorre as propriedades.

let person = {
  name: "William",
  surname: "Santana",
  email: "william@email.com",
};

for (let property in person) {
  // Exibe o nome da propriedade.
  console.log(property);
  // Exibe o conteúdo da propriedade.
  console.log(person[property]);
}

let students = ["William", "Mayk", "João"];

for (let student in students) {
  console.log(students[student]);
}
