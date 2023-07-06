import "./css/App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Layout from "./components/Layout/layout";
import { AppProvider } from "./context/AppContext";
import ReactGA from "react-ga4";

ReactGA.initialize("G-LN7ZYBXKG7");
const App = () => {
  return (
    <AppProvider>
      <div className="App">
        <Layout />
      </div>
    </AppProvider>
  );
};

export default App;
