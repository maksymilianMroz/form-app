import { useState, useEffect } from "react";

import Button from "../../components/UI/Button/Button";

import classes from "./Form.module.css";

const Form = () => {
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
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  return (
    <form className={classes.form}>
      <div className={classes.inputcontainer}>
        <label className={classes.label} htmlFor="name">
          Imię i Nazwisko
        </label>
        <input className={classes.text} type="text" id="name" />
      </div>
      <div className={classes.inputcontainer}>
        <label className={classes.label} htmlFor="name">
          E-mail
        </label>
        <input className={classes.text} type="email" id="name" />
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
            value={items[0]}
          />
        )}
      </div>
      <Button className={`${classes.button}`}>Wyślij</Button>
    </form>
  );
};

export default Form;
