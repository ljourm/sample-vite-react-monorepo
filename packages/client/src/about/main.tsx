import React from "react";
import ReactDOM from "react-dom";

const appTitle = import.meta.env.VITE_APP_TITLE;
const sampleNumber = import.meta.env.VITE_SAMPLE_NUMBER;

ReactDOM.render(
  <React.StrictMode>
    <p>app title: {appTitle}</p>
    <p>sample number: {sampleNumber}</p>
  </React.StrictMode>,
  document.getElementById("root")
);
