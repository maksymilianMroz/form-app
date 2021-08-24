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

  const selectedBranchHandler = (event) => {
    let select;
    if (event.target.value === 1) select = "XYZ";
    if (event.target.value === 2) select = "ABC";
    if (event.target.value === 3) select = "RNQ";

    setSelectedBranch(select);
  };

  return (
    <AppContext.Provider
      value={{
        selectedBranch: selectedBranch,
        selectedBranchHandler: selectedBranchHandler,
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
