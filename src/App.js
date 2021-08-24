import { useState } from "react";
import { Route } from "react-router-dom";

import Header from "./components/Header/Header";
import AppContext from "./context/app-context";

import Home from "./routes/Home/Home";
import FormSite from "./routes/FormSite/FormSite";
import PrivacyPolicy from "./routes/PrivacyPolicy/PrivacyPolicy";
import Summary from "./routes/Summary/Summary";

import classes from "./App.module.css";

const App = () => {
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [formAvalible, setFormAvalible] = useState(false);
  const [errorVisible, setErrorVisible] = useState(false);

  const selectedBranchHandler = (event) => {
    if (event.target.value === 1) setSelectedBranch("XYZ");
    if (event.target.value === 2) setSelectedBranch("ABC");
    if (event.target.value === 3) setSelectedBranch("RNQ");
    setFormAvalible(true);
    setErrorVisible(false);
  };

  const formAvalibleHandler = () => {
    !formAvalible && setErrorVisible(true);
  };

  return (
    <AppContext.Provider
      value={{
        selectedBranch: selectedBranch,
        selectedBranchHandler: selectedBranchHandler,

        formAvalible: formAvalible,
        formAvalibleHandler: formAvalibleHandler,

        errorVisible: errorVisible,
      }}
    >
      <div className={classes.App}>
        <Header />
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/form-site">
          <FormSite />
        </Route>
        <Route path="/privacy-policy">
          <PrivacyPolicy />
        </Route>
        <Route path="/summary">
          <Summary />
        </Route>
      </div>
    </AppContext.Provider>
  );
};

export default App;
