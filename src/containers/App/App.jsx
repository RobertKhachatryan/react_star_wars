import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import routesConfig from "@routes/routesConfig";
import Header from "@components/Header/Header";
import styles from "./App.module.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.wrapper}>
        <Header />
        <Routes>
          {routesConfig.map((route, index) => (
            <Route path={route.path} Component={route.component} key={index} />
          ))}
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
