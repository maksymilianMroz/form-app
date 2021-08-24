import Form from "../../components/Form/Form";

import classes from "./FormSite.module.css";

const FormSite = () => (
  <div className={classes.container}>
    <h1 className={classes.header}>Formularz zgłoszeniowy</h1>
    <Form />
  </div>
);

export default FormSite;
