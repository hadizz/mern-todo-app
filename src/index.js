import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import TodosHome from "./components/todosHome";

ReactDOM.render(
  <React.StrictMode>
    <TodosHome />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
