import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { ProductProvider } from "./Provider/ProductContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ProductProvider>
      <App />
    </ProductProvider>
  </React.StrictMode>
);
