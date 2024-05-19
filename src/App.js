import "./css/App.css";
import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Layout from "./components/Layout/layout";
import { AppProvider } from "./context/AppContext";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";
import DS_Journey from "./components/DS_Journey/ds_journey";

ReactGA.initialize("G-LN7ZYBXKG7");

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => {
  return (
    <div>
      <AppProvider>
        <div className="App">
          <Link to="/">
            <div></div>
          </Link>
          <Link to="/data-science-journey">
            <div></div>
          </Link>

          <ScrollToTop />
          <Routes>
            <Route path="/" exact element={<Layout />} />
            <Route path="/data-science-journey" element={<DS_Journey />} />
          </Routes>
        </div>
      </AppProvider>
    </div>
  );
};

export default App;
