import { Route } from "react-router-dom";

import Home from "./routes/Home/Home";
import FormSite from "./routes/FormSite/FormSite";
import PrivacyPolicy from "./routes/PrivacyPolicy/PrivacyPolicy";
import Summary from "./routes/Summary/Summary";

import classes from "./App.module.css";

const App = () => {
  return (
    <div className={classes.App}>
      <h2>testowo</h2>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/form-site">
        <FormSite />
      </Route>
      <Route path="./privacy-policy">
        <PrivacyPolicy />
      </Route>
      <Route path="./summary">
        <Summary />
      </Route>
    </div>
  );
};

export default App;
