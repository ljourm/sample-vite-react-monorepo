import React from "react";
import ReactDOM from "react-dom";

import "~/styles/app.scss";
import ArticleHeadline from "~/components/atoms/ArticleHeadline";

const appTitle = import.meta.env.VITE_APP_TITLE;
const apiBaseUri = import.meta.env.VITE_API_BASE_URI;

ReactDOM.render(
  <React.StrictMode>
    <p>app title: {appTitle}</p>
    <p>api uri: {apiBaseUri}</p>
    <ArticleHeadline>sample title</ArticleHeadline>
  </React.StrictMode>,
  document.getElementById("root")
);
