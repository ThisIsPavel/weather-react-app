import styles from "./Days.module.scss";
import { useContext } from "react";
import { RequestContext } from "../../context/RequestContext";
import { convertDate, getDaysOfWeek } from "../../utils/Date";

const Days = () => {
  const { daysInfo } = useContext(RequestContext);
  const days = daysInfo?.forecast?.forecastday?.map((day) => {
    const date = new Date(day.date);
    const currentDate = new Date().getDate();
    const daysOfWeek =
      currentDate === date.getDate() ? "Cегодня" : getDaysOfWeek(date);
    return (
      <button key={day.date}>
        <li className={styles.card}>
          <h5 className={styles.day}>{daysOfWeek}</h5>
          <p className={styles.date}>{convertDate(date)}</p>
          <div className={styles.icon}>
            <img src={day.day.condition.icon} />
          </div>
          <p className={styles.temp_day}>
            {Math.floor(day.day.avgtemp_c)}
            {"\u00b0"}
          </p>
          <p className={styles.temp_night}>
            {Math.floor(day.day.mintemp_c)}
            {"\u00b0"}
          </p>
          <p className={styles.info}>{day.day.condition.text}</p>
        </li>
      </button>
    );
  });

  return <ul className={styles.days}>{days}</ul>;
};

export default Days;
