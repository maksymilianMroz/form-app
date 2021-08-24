import { Link } from "react-router-dom";

import classes from "./Nav.module.css";

const Nav = () => (
  <nav className={classes.Nav}>
    <ul>
      <li>
        <Link to="/home">Strona Główna</Link>
      </li>
      <li>
        <Link to="/privacy-policy">Polityka Prywatności</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
