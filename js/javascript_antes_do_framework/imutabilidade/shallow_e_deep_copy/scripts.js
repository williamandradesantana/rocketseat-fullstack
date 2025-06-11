// Shallow copy (cópia superficial): não pega itens aninhados.

const htmlCourse = {
  course: "HTML",
  students: [{ name: "Rodrigo", email: "rodrigo@email.com" }],
};

// const jsCourse = {
//   ...htmlCourse,
//   course: "JavaScript",
// };

// Vai modificar o htmlCourse também students é uma referência não uma cópia.
// jsCourse.students.push({ name: "William", email: "william@email.com" });

// Deep copy (cópia profunda)

const jsCourse = {
  ...htmlCourse,
  course: "JavaScript",
  students: [
    ...htmlCourse.students,
    { name: "William", email: "william@gmail.com" },
  ],
};

jsCourse.students.push({ name: "João", email: "joao@gmail.com" });

const jsCourse2 = {
  ...htmlCourse,
  course: "JavaScript",
};

jsCourse.students = [
  ...htmlCourse.students,
  { name: "William", email: "william@gmail.com" },
];
console.log(jsCourse, htmlCourse);
