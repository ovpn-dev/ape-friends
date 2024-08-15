import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        {" "}
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>
);
