import { useContext } from "react";
import { themContext, ThemePrpvider } from "../contexts/themecontect";

function Layout({ startingThem, children }) {
  return (
    <ThemePrpvider startingThem={startingThem}>
      <LayoutNoThemeProvider>{children}</LayoutNoThemeProvider>
    </ThemePrpvider>
  );
}

function LayoutNoThemeProvider({ children }) {
  const { theme } = useContext(themContext);
  return (
    <div
      className={
        theme === "light" ? "container-fluid light" : "container-fluid dark"
      }
    >
      {children}
    </div>
  );
}

export default Layout;
