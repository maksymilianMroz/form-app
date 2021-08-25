import { useContext } from "react";

import AppContext from "../../context/app-context";

import AvailableBranches from "../../components/AvailableBranches/AvailableBranches";
import Text from "../../components/UI/Text/Text";
import Card from "../../components/UI/Card/Card";
import ErrorComponent from "../../components/ErrorComponent/ErrorComponent";
import { Link } from "react-router-dom";

import classes from "./Home.module.css";

const Home = () => {
  const ctx = useContext(AppContext);

  return (
    <div className={classes.container}>
      <div className={classes.Home}>
        <Card>
          <Text>Wybierz oddział z którym chcesz się skontaktować:</Text>
        </Card>
        <AvailableBranches />
        {ctx.errorVisible && <ErrorComponent />}
        <Link
          onClick={!ctx.formAvalible && ctx.isFormAvalibleHandler}
          to={ctx.formAvalible && `/form-site`}
          className={classes.Link}
        >
          Przejdź do formularza
        </Link>
      </div>
    </div>
  );
};

export default Home;
