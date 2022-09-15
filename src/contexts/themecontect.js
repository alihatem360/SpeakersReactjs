import { createContext, useState } from "react";
import useTheme from "../hooks/useTheme";
export const themContext = createContext();

function ThemePrpvider({ startingThem, children }) {
  const { theme, setTheme } = useTheme(startingThem);
  return (
    <themContext.Provider value={{ theme, setTheme }}>
      {children}
    </themContext.Provider>
  );
}

export { ThemePrpvider };
