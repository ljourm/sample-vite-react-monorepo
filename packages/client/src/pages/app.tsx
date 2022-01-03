import React from "react";
import ReactDOM from "react-dom";

import "~/styles/app.scss";
import DefaultLayout from "~/components/templates/defaultLayout";

ReactDOM.render(
  <React.StrictMode>
    <DefaultLayout>
      <>
        <p>とっぷがめん</p>
      </>
    </DefaultLayout>
  </React.StrictMode>,
  document.getElementById("root")
);
