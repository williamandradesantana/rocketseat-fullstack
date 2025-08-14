import "./global.css";

import { useState } from "react";

import { Button } from "./components/button";
// import { useMessage } from "./hooks/useMessage";

import styles from "./app.module.css";

function App() {
  // const { show } = useMessage({ name: "William", age: 18 });

  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount(count + 1);
  }

  function handleRemove() {
    setCount(count - 1);
  }

  return (
    <div className={styles.container}>
      {/* <Button
        name="Adicionar"
        onClick={() => show("Mensagem personalizada!")}
      /> */}
      <Button name="Adicionar" onClick={handleAdd} />
      <span>{count}</span>
      <Button name="Remover" onClick={handleRemove} />
    </div>
  );
}

export default App;
