import styles from "./Wapper.module.scss";
import propTypes from "./props";

const Wrapper = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

Wrapper.propTypes = propTypes;

export default Wrapper;
