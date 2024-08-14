import { memo } from "react";
import Icons from "../../assets/icons";
import styles from "./InfoItem.module.scss";
import propTypes from "./props";

const InfoItem = memo(({ icon, title, message, propStyles }) => {
  return (
    <li key={icon} className={[styles.info, propStyles].join(" ")}>
      <div className={styles.wrapper}>
        <Icons id={icon} />
      </div>
      <p className={styles.title}>{title}</p>
      <p className={styles.message}>{message}</p>
    </li>
  );
});

InfoItem.propTypes = propTypes;

export default InfoItem;
