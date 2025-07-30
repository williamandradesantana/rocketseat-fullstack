let user: { name: string; age: number; avatarUrl?: string } = {
  name: "William",
  age: 20,
};

/* 
function signIn(email: string, password: string) {
    // Lógica de conectar o usuário na aplicação.
}

signIn("wbs@gmail.com", "23232");
*/

function signIn({ email, password }: { email: string; password: string }) {
  // Lógica de conectar o usuário na aplicação.
  console.log("Usuário " + email + " conectado!");
}

signIn({ email: "wbs@gmail.com", password: "23232" });
