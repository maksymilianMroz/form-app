import { useContext, useEffect } from "react";

import AppContext from "../../context/app-context";

import classes from "./Summary.module.css";

const Summary = () => {
  const ctx = useContext(AppContext);

  useEffect(() => {
    if (ctx.selectedBranch === null) {
      ctx.isSelectedBranchHandler();
    }
  }, []);

  return (
    <div className={classes.container}>
      <h1 className={classes.header}>Formularz zgłoszeniowy</h1>
    </div>
  );
};

export default Summary;
