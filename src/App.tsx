import React from 'react';
import RouterConfig from "router/router-config";
import RenderRouter from "router/RenderRouter";
import styles from "./app.scss";

function App() {
  console.log(111);
  return (
    <div className={styles.app}>
      <RenderRouter routes={RouterConfig} />
    </div>
  );
}

export default App;
