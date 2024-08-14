import styles from "./Button.module.scss";
import propTypes from "./props";
const Button = ({ children, className, onClick }) => {
  return (
    <button className={`${styles.btn} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = propTypes;

export default Button;
