import "./global.css";

import { Button } from "./components/button";

import styles from "./app.module.css";

function App() {
  return (
    <div className={styles.container}>
      <Button name="Adicionar" />
      <span>0</span>
      <Button name="Remover" />
    </div>
  );
}

export default App;
