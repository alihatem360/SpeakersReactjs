import { useState } from "react";

function useTheme(startingThem = "light") {
  const [theme, setTheme] = useState(startingThem);
  function validateFunction(themeValue) {
    if (themeValue === "dark") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return {
    theme,
    setTheme: validateFunction,
  };
}

export default useTheme;
