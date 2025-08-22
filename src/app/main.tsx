import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { Button } from "@/shared/ui";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div>
      Questions
      <Button>Button</Button>
    </div>
  </StrictMode>
);
