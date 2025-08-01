interface Person {
  id: number;
  name: string;
}

interface Teacher extends Person {
  subjects: string[];
}

interface Student extends Person {
  age: number;
}

let teacher: Teacher = {
  id: 1,
  name: "William",
  subjects: ["TypeScript", "JavaScript"],
};
let student: Student = { id: 2, name: "João", age: 18 };

console.log(teacher, student);
