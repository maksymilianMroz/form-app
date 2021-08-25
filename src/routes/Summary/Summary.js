import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import AppContext from "../../context/app-context";

import Text from "../../components/UI/Text/Text";

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
      <h1 className={classes.header}>Podsumowanie</h1>
      <div className={classes.textContainer}>
        <Text>Udało się! Twój formularz został poprawnie wysłany!</Text>
      </div>
      <Link className={classes.link} to="/form-app/home">
        Wróć do strony głównej
      </Link>
    </div>
  );
};

export default Summary;
