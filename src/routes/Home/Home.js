import AvailableBranches from "../../components/AvailableBranches/AvailableBranches";
import Text from "../../components/UI/Text/Text";
import Card from "../../components/UI/Card/Card";
import { Link } from "react-router-dom";

import classes from "./Home.module.css";

const Home = () => (
  <div className={classes.Home}>
    <Card>
      <Text>Wybierz oddział z którym chcesz się skontaktować:</Text>
    </Card>
    <AvailableBranches />
    {/* <Link className={classes.Link}>Przejdź do formularza</Link> */}
  </div>
);

export default Home;
