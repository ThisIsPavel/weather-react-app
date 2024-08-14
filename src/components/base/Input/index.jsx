import propTypes from "./props";
import styles from "./Input.module.scss";
import { useContext } from "react";
import { RequestContext } from "../../../context/RequestContext";

const Input = (props) => {
  const data = useContext(RequestContext);
  const { label, value, onChange, type, placeholder } = props;
  const customLabel = label ? (
    <label className={styles.label}>{label}</label>
  ) : null;
  return (
    <div>
      {customLabel}
      <input
        className={styles.input}
        defaultValue={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        onKeyDown={data.getCurrentDay}
      ></input>
    </div>
  );
};

Input.propTypes = propTypes;

export default Input;
