import { useContext } from "react";
import Icons from "../../../assets/icons";
import Input from "../../base/Input";
import styles from "./Header.module.scss";
import { useTheme } from "../../../hooks/useTheme";
import { RequestContext } from "../../../context/RequestContext";

function Header() {
  const theme = useTheme();
  const value = useContext(RequestContext);
  const changeThemeHandler = () => {
    theme.changeTheme(theme.theme === "light" ? "dark" : "light");
  };

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Icons id="logo" />
        <h1 className={styles.title}>Weather</h1>
      </div>
      <Input
        value={value.value}
        onChange={value.handleChange}
        type={"text"}
        placeholder={"Введите название города"}
      />
      <button onClick={changeThemeHandler}>
        <Icons id="theme" />
      </button>
    </header>
  );
}

export default Header;
