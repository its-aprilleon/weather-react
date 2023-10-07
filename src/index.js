import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";

import reportWebVitals from "./reportWebVitals";
import Weather from "./Weather";
import "./Weather.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="App">
      <Weather />
      <footer>
        <a href="https://github.com/its-aprilleon/weather-react-app">
          Open Source Code
        </a>{" "}
        By <a href="https://github.com/its-aprilleon">April</a>
      </footer>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
