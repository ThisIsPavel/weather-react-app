import { useContext} from "react";
import Button from "../base/Button";
import styles from "./Tabs.module.scss";
import { RequestContext } from "../../context/RequestContext";

const Tabs = () => {
  const { handleChangeTab, tabs } = useContext(RequestContext);

  return (
    <div className={styles.tabs}>
      <div className={styles.left}>
        {tabs.map((tab, i) => (
          <Button
            key={tab.text}
            className={`${tabs[i].active ? styles.active : ""}`}
            onClick={() => handleChangeTab(tab)}
          >
            {tab.text}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
