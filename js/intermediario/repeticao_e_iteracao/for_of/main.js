// for...of  itera sobre valores de um objeto iterável.
let students = ["William", "Mayk", "João"];

for (let student of students) {
  console.log(student);
}

let user = [
  {
    name: "William",
    surname: "Santana",
    email: "william@email.com",
  },
];

for (let value of user) {
  console.log(value.name);
}
