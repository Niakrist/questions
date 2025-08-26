import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
<<<<<<< HEAD
=======
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import { Provider } from "react-redux";
import { store } from "./store/store";
>>>>>>> d5535a1ba98a94d028554938546e9b28f2e881cd
import "./styles/index.css";
import { Button, Htag, Label, Text } from "@/shared/ui";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { store } from "./store/store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>

    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
