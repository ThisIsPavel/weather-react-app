import { useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext.js";
import propTypes from "./props.js";
import { ChangeTheme } from "../../utils/ChangeTheme.js";
import { storage } from "../../utils/Storage.js";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(storage.getItem("theme") || "light");
  useEffect(() => {
    ChangeTheme(theme);
  }, [theme]);

  function changeTheme(theme) {
    storage.setItem("theme", theme);
    setTheme(theme);
  }
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = propTypes;
