import classes from "./Form.module.css";

const Form = () => (
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
      <textarea
        className={`${classes.text} ${classes.textarea}`}
        type="text"
        id="name"
      />
    </div>
  </form>
);

export default Form;
