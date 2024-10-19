// src/context/themeContext.js
import { createContext } from "react";

export const CurrentContext = createContext({
  setShowModelRegister: () => {},
  showModelRegister: false, // Inicializa como false
});
