import "./global.css";

import { useState, useEffect } from "react";

import { Button } from "./components/button";
// import { useMessage } from "./hooks/useMessage";

import styles from "./app.module.css";

function App() {
  // const { show } = useMessage({ name: "William", age: 18 });

  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount((prevState) => prevState + 1);
  }

  function handleRemove() {
    setCount((prevState) => prevState - 1);
  }

  useEffect(() => {
    console.log("Oi!");
  }, []);

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
