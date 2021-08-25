import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "antd/dist/antd.less";
import App from "./App";
import { ConfigProvider } from "antd";
import zhCN from "antd/lib/locale-provider/zh_CN";
import "moment/locale/zh-cn";

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);

