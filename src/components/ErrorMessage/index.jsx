
import styles from "./ErrorMessage.module.scss";

const ErrorMessage = ({ message }) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.error}>{message}</h2>;
    </div>
  );
};

export default ErrorMessage;
