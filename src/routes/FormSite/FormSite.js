import { useContext, useEffect } from "react";

import AppContext from "../../context/app-context";

import Form from "../../components/Form/Form";

import classes from "./FormSite.module.css";

const FormSite = () => {
  const ctx = useContext(AppContext);

  useEffect(() => {
    if (ctx.selectedBranch === null) {
      ctx.isSelectedBranchHandler();
    }
  }, []);

  return (
    <div className={classes.container}>
      <h1 className={classes.header}>Formularz zgłoszeniowy</h1>
      <Form />
    </div>
  );
};

export default FormSite;
