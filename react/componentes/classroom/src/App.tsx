import { Button } from "./components/Button";

export function App() {
  return (
    <>
      <Button name="Criar" age={12} onClick={() => alert("Criar")} />
      <Button name="Editar" age={231} />
      <Button name="Excluir" age={23122} />
    </>
  );
}
