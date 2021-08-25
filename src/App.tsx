import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter as Router } from "react-router-dom";
import RouterConfig from "router/router-config";
import RenderRouter from "router/RenderRouter";
import styles from "./app.scss";

function App () {
  return (
    <Provider store={store}>
      <div className={styles.app}>
        <Router>
          <RenderRouter routes={RouterConfig} />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
