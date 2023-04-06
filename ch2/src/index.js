import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //앞으로 사라질 레거시 기능을 사용할 때 경고를 주고, 앞으로 미래의 리액트 버전에 도입될 기능들이
  // 정상적으로 호환될 수 있도록 유도하는 개발 환경에서만 활성화되는 디버깅용 컴포넌트
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// 웹 성능을 측정하는 도구이다.
// 리액트와 관련없는 기능이니 당장 신경 X

reportWebVitals();
