import { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";

export function useFetch(URL, currentCountDays) {
  console.log("hook");
  const [daysInfo, setDaysInfo] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    setDaysInfo(null);
    setLoading(true);
    const getData = async () => {
      try {
        setDaysInfo(await fetchData(URL));
        setLoading(false);
      } catch (error) {
        console.log(await fetchData(URL));
      }
    };
    getData();
  }, [currentCountDays]);
  return { daysInfo, setDaysInfo, loading, setLoading };
}
