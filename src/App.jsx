import CurrentDay from "./components/CurrentDay";
import CurrentDayInfo from "./components/CurrentDayInfo";
import Header from "./components/shared/Header";
import Wrapper from "./components/shared/Wrapper";
import ErrorMessage from "./components/ErrorMessage";
import styles from "./App.module.scss";
import Tabs from "./components/Tabs/";
import Days from "./components/Days/Index";
import Loader from "./components/Loader";
import { useContext } from "react";
import { RequestContext } from "./context/RequestContext";
// import Popup from "./components/shared/Popup";

function App() {
  const { daysInfo, loading } = useContext(RequestContext);
  return (
    <>
      {/* <Popup /> */}
      <Wrapper>
        <Header />
        <main className={styles.main}>
          {loading && <Loader />}
          {daysInfo?.error ? (
            <ErrorMessage message={daysInfo.error.message} />
          ) : (
            <>
              <section className={styles["current-day"]}>
                <CurrentDay />
                <CurrentDayInfo />
              </section>
              <section>
                <Tabs />
              </section>
              <section>
                <Days />
              </section>
            </>
          )}
        </main>
      </Wrapper>
    </>
  );
}

export default App;
