import React from 'react';
import { Provider } from 'react-redux';
import store from "./store/store";
import RouterConfig from "router/router-config";
import RenderRouter from "router/RenderRouter";
import styles from "./app.scss";

function App() {
  return (
    <Provider store={store}>
      <div className={styles.app}>
        <RenderRouter routes={RouterConfig} />
      </div>
    </Provider>
  );
}

export default App;
