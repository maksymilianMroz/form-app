import { useState, useEffect, useContext } from "react";

import AppContext from "../../context/app-context";

import Button from "../../components/UI/Button/Button";
import Text from "../UI/Text/Text";

import classes from "./Form.module.css";

const Form = () => {
  const ctx = useContext(AppContext);

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://baconipsum.com/api/?type=all-meat&paras=2")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          ctx.setEnteredText(result[0]);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  return (
    <>
      <form
        className={classes.form}
        onSubmit={ctx.submitHandler}
        autoComplete="off"
      >
        <div className={classes.inputcontainer}>
          <label className={classes.label} htmlFor="name">
            Imię i Nazwisko
          </label>
          <input
            className={classes.text}
            type="text"
            id="name"
            onChange={ctx.changeNameHandler}
            autoComplete="off"
          />
        </div>
        <div className={classes.inputcontainer}>
          <label className={classes.label} htmlFor="name">
            E-mail
          </label>
          <input
            className={classes.text}
            type="email"
            id="name"
            onChange={ctx.changeEmailHandler}
            autoComplete="off"
          />
        </div>
        <div className={classes.inputcontainer}>
          <label className={classes.label} htmlFor="name">
            Treść Zgłoszenia
          </label>

          {error && <div>Error: {error.message}</div>}
          {!isLoaded && <div>Loading...</div>}
          {items && (
            <textarea
              className={`${classes.text} ${classes.textarea}`}
              type="text"
              id="name"
              value={ctx.enteredText}
              onChange={ctx.changeTextHandler}
              autoComplete="off"
            />
          )}
        </div>
        <Button className={`${classes.button}`}>Wyślij</Button>
      </form>
      {!ctx.formIsValid && ctx.formErrors && (
        <div className={classes.errors}>
          <h2>Uwaga</h2>
          <Text>{!ctx.nameIsValid && "Wpisz koniecznie imię i nazwisko!"}</Text>
          <Text>{!ctx.emailIsValid && "Podaj poprawny adres email!"}</Text>
          <Text>
            {!ctx.textIsValid &&
              "W treści zgłoszenia możesz zamieścić tylko 5000 znaków!"}
          </Text>
        </div>
      )}
    </>
  );
};

export default Form;
