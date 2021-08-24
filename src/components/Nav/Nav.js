import { Link } from "react-router-dom";

import classes from "./Nav.module.css";

const Nav = () => (
  <nav className={classes.Nav}>
    <ul>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/privacy-policy">Privacy Policy</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
