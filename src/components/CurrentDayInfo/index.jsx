import styles from "./CurrentDayInfo.module.scss";
import InfoItem from "../InfoItem";
import PropTypes from "./props";
import { useContext, useMemo } from "react";
import { RequestContext } from "../../context/RequestContext";

const CurrentDayInfo = () => {
  const { daysInfo } = useContext(RequestContext);

  const infoItems = [
    {
      icon: "temp",
      title: "Температура",
      message: `Ощущается как ${Math.floor(
        daysInfo?.current?.feelslike_c
      )}${"\u00b0"}`,
    },
    {
      icon: "pressure",
      title: "Давление",
      message: `${daysInfo?.current?.pressure_mb} мм рт. ст.`,
    },
    {
      icon: "wind",
      title: "Ветер",
      message: `${daysInfo?.current?.wind_mph} м/c`,
    },
    {
      icon: "precipitation",
      title: "Осадки",
      message: daysInfo?.current?.condition?.text,
    },
  ];

  return (
    <ul className={styles.card}>
      {infoItems.map((item) => (
        <InfoItem
          key={item.icon}
          icon={item.icon}
          title={item.title}
          message={item.message}
          propStyles={styles.position}
        />
      ))}
    </ul>
  );
};

CurrentDayInfo.propTypes = PropTypes;

export default CurrentDayInfo;
