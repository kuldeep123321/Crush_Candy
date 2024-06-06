// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import { store } from "./store";
// import { Provider } from "react-redux";

// const root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement
// );
// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

import React from "react";
import ReactDOM from "react-dom/client"; // Ensure this is the correct import for React 18
import "./index.css"; // Ensure the CSS file path is correct
import App from "./App"; // Ensure the App component file path is correct
import { store } from "./store"; // Ensure the store file path is correct
import { Provider } from "react-redux"; // Ensure react-redux is installed

// Ensure there is a root element with id 'root' in your index.html
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement as HTMLElement);
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
} else {
  console.error("Root element not found");
}

