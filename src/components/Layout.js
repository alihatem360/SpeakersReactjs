import { createContext, useState } from "react";
export const themContext = createContext();

function Layout({ startingThem, children }) {
  const [theme, setTheme] = useState(startingThem);

  return (
    <themContext.Provider value={{ theme, setTheme }}>
      <div
        className={
          theme === "light" ? "container-fluid light" : "container-fluid dark"
        }
      >
        {children}
      </div>
    </themContext.Provider>
  );
}

export default Layout;
