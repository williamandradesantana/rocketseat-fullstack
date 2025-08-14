import "./global.css";

import { Button } from "./components/button";

import styles from "./app.module.css";

import { useMessage } from "./hooks/useMessage";

function App() {
  const { show } = useMessage({ name: "William", age: 18 });

  return (
    <div className={styles.container}>
      <Button
        name="Adicionar"
        onClick={() => show("Mensagem personalizada!")}
      />
      <span>0</span>
      <Button name="Remover" />
    </div>
  );
}

export default App;
