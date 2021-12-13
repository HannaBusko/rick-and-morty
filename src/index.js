import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import Preloader from "./components/Preloader";

import "./index.css";

import reportWebVitals from "./reportWebVitals";

const Layout = React.lazy(() => import("./components/Layout"));

ReactDOM.render(
  <BrowserRouter>
    <Suspense fallback={<Preloader />}>
      <React.StrictMode>
        <Layout />
      </React.StrictMode>
    </Suspense>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
