import { useState } from "react";
import { RequestContext } from "../../context/RequestContext";
import { useFetch } from "../../hooks/useFetch";
import { fetchData } from "../../utils/fetchData";
import { URL, TABS } from "../../constants";
import propTypes from "./props";

const RequestProvider = ({ children }) => {
  const [value, setValue] = useState("");
  const [currentCountDays, setCurrentCountDays] = useState(TABS[0].value);
  const CurrentURL = `${URL}&q=${value || "Москва"}&days=${currentCountDays}`;
  const [tabs, setTabs] = useState(TABS);

  const { daysInfo, setDaysInfo, loading, setLoading } = useFetch(
    CurrentURL,
    currentCountDays
  );
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const getCurrentDay = async (e) => {
    if (e.keyCode === 13) {
      setLoading(true);
      setDaysInfo(await fetchData(CurrentURL));
      setLoading(false);
    }
  };
  const handleChangeTab = (currentTab) => {
    const newTabs = tabs.map((tab) =>
      tab.text === currentTab.text
        ? { ...tab, active: true }
        : { ...tab, active: false }
    );
    setTabs(newTabs);
    setCurrentCountDays(currentTab.value);
  };

  return (
    <RequestContext.Provider
      value={{
        value,
        handleChange,
        daysInfo,
        getCurrentDay,
        handleChangeTab,
        tabs,
        loading,
      }}
    >
      {children}
    </RequestContext.Provider>
  );
};

RequestProvider.propTypes = propTypes;

export default RequestProvider;
