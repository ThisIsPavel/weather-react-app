import Icons from "../../../assets/icons";
import InfoItem from "../../InfoItem";
import styles from "./Popup.module.scss";

const Popup = () => {
  const infoItems = [
    { icon: "temp", title: "Температура" },
    { icon: "pressure", title: "Давление" },
    { icon: "wind", title: "Ветер" },
    { icon: "precipitation", title: "Осадки" },
  ];

  return (
    <>
      <div className={styles.blur}>
        <div className={styles.popup}>
          <div className={styles.current__day}>
            <h3 className={styles.temp}>20{"\u00b0"}</h3>
            <h2 className={styles.day}>Сегодня</h2>
            <Icons id="rain" />
          </div>
          <ul className={styles.items}>
            {infoItems.map((item) => (
              <InfoItem
                key={item.icon}
                icon={item.icon}
                title={item.title}
                message={"Давления Нsacas ascasc sac asc asc asc sasacascsa еn"}
                propStyles={styles.position}
              />
            ))}
          </ul>
          <button className={styles.close}>
            <Icons id="close" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Popup;
