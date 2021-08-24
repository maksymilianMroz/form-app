import classes from "./Header.module.css";

import Nav from "../Nav/Nav";
import Card from "../UI/Card/Card";

const Header = () => (
  <div className={classes.Header}>
    <h3 className={classes.Logo}>logo</h3>
    <Card>
      <Nav />
    </Card>
  </div>
);

export default Header;
