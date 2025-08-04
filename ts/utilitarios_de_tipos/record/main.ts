// Cria um objeto onde todas as chaves são string e os valores são números.
const scores: Record<string, number> = {
  William: 10,
  Rodrigo: 2,
  Mayk: 15,
};

// Limitar valores.
type Profile = "admin" | "user" | "guest";

const user: Record<Profile, number> = {
  admin: 1,
  user: 2,
  guest: 3,
};

interface User {
  name: string;
  email: string;
}

const users: Record<number, User> = {
  1: { name: "William", email: "wbs@gmail.com" },
  2: { name: "Mayk", email: "mayk@gmail.com" },
};
