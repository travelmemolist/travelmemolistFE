import React from "react";
import { ConfigProvider } from "antd";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#6b61ff",
            borderRadius: 4,
          },
          // components: {
          //   Table: {
          //     headerBg: "#ADD8E6",
          //     headerSplitColor: "#ADD8E6",
          //   },
          //   Carousel: {
          //     colorBgContainer: "red",
          //   },
          // },
        }}
      >
        <App />
      </ConfigProvider>
    </Provider>
  </BrowserRouter>
);

reportWebVitals();
