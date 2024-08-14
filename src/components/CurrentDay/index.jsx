import { useContext } from "react";
import styles from "./CurrentDay.module.scss";
import { RequestContext } from "../../context/RequestContext";
const CurrentDay = () => {
  const { daysInfo } = useContext(RequestContext);

  return (
    <div className={styles.card}>
      <header className={styles.header}>
        <div className={styles.left}>
          <h3 className={styles.temp}>
            {Math.floor(daysInfo?.current?.temp_c)}
            {"\u00b0"}
          </h3>
          <h2 className={styles.day}>Сегодня</h2>
        </div>
        <div className={styles.right}>
          <img src={daysInfo?.current?.condition?.icon} alt="icon" />
        </div>
      </header>
      <footer className={styles.footer}>
        <p className={styles.time}>
          Время: {daysInfo?.location?.localtime.split(" ")[1]}
        </p>
        <p className={styles.city}>Город: {daysInfo?.location?.name}</p>
      </footer>
    </div>
  );
};

export default CurrentDay;
