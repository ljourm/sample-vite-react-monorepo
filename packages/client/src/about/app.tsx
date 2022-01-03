import React from "react";
import ReactDOM from "react-dom";

import "~/styles/app.scss";
import DefaultLayout from "~/components/templates/defaultLayout";
import ArticleHeadline from "~/components/atoms/articleHeadline";

const appTitle = import.meta.env.VITE_APP_TITLE;
const apiBaseUri = import.meta.env.VITE_API_BASE_URI;

ReactDOM.render(
  <React.StrictMode>
    <DefaultLayout>
      <>
        <p>app title: {appTitle}</p>
        <p>api uri: {apiBaseUri}</p>
        <ArticleHeadline>sample title</ArticleHeadline>
      </>
    </DefaultLayout>
  </React.StrictMode>,
  document.getElementById("root")
);
