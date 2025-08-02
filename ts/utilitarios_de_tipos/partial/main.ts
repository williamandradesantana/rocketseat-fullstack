interface User {
  id: number;
  name: string;
  email: string;
}

const newUser: User = { id: 1, name: "William", email: "wbs@gmail.com" };
const updatedUser: Partial<User> = { name: "William Batista" };

console.log(updatedUser);
