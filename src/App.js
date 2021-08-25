import { useState } from "react";
import { Route, useHistory } from "react-router-dom";

import Header from "./components/Header/Header";
import AppContext from "./context/app-context";

import Home from "./routes/Home/Home";
import FormSite from "./routes/FormSite/FormSite";
import PrivacyPolicy from "./routes/PrivacyPolicy/PrivacyPolicy";
import Summary from "./routes/Summary/Summary";

import classes from "./App.module.css";

const App = () => {
  const history = useHistory();

  const [selectedBranch, setSelectedBranch] = useState(null);
  const [formAvalible, setFormAvalible] = useState(false);
  const [errorVisible, setErrorVisible] = useState(false);

  const [nameIsValid, setNameIsValid] = useState(false);
  const [enteredName, setEnteredName] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [textIsValid, setTextIsValid] = useState(false);
  const [enteredText, setEnteredText] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);

  const [formErrors, setFormErrors] = useState(false);

  // Here we put data from form, after sending it
  const [formDataAfterSend, setFormDataAfterSend] = useState({});

  const selectedBranchHandler = (event) => {
    if (event.target.value === 1) setSelectedBranch("XYZ");
    if (event.target.value === 2) setSelectedBranch("ABC");
    if (event.target.value === 3) setSelectedBranch("RNQ");
    setFormAvalible(true);
    setErrorVisible(false);
  };

  const isFormAvalibleHandler = () => {
    !formAvalible && setErrorVisible(true);
  };

  const changeNameHandler = (event) => {
    setEnteredName(event.target.value);
    setNameIsValid(enteredName.includes(" "));
  };

  const changeEmailHandler = (event) => {
    setEnteredEmail(event.target.value);
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const changeTextHandler = (event) => {
    setEnteredText(event.target.value);
    setTextIsValid(enteredText.trim().length < 5000);
  };

  const isSelectedBranchHandler = () => {
    history.push("/home");
    isFormAvalibleHandler();
  };

  const clearBranchHandler = () => {
    setSelectedBranch(null);
  };

  const formValidationHandler = () => {
    if (nameIsValid && emailIsValid && textIsValid) setFormIsValid(true);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    formValidationHandler();

    if (!formIsValid) {
      setFormErrors(true);
    }

    if (formIsValid) {
      setFormErrors(false);
      setFormDataAfterSend({
        "name:": enteredName,
        "email:": enteredEmail,
        "message:": enteredText,
      });

      setNameIsValid(false);
      setEnteredName("");
      setEmailIsValid(false);
      setEnteredEmail("");
      setTextIsValid(false);
      setEnteredText("");
      setFormIsValid(false);

      history.push("/summary");
    }
  };

  return (
    <AppContext.Provider
      value={{
        selectedBranch,
        selectedBranchHandler,

        formAvalible,
        isFormAvalibleHandler,

        errorVisible,

        enteredName,
        enteredEmail,
        enteredText,
        setEnteredText,

        nameIsValid,
        emailIsValid,
        textIsValid,
        formIsValid,

        changeNameHandler,
        changeEmailHandler,
        changeTextHandler,
        isSelectedBranchHandler,

        submitHandler,
        formValidationHandler,
        formErrors,
        clearBranchHandler,
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
