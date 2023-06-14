import "./css/App.css";
import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Layout from "./components/Layout/layout";
import { AppProvider, AppContext } from "./context/AppContext";

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
