import { useContext } from "react";

import AppContext from "../../context/app-context";

import classes from "./AvailableBranches.module.css";

const AvailableBranches = () => {
  const ctx = useContext(AppContext);

  return (
    <div className={classes.Branch}>
      <ul className={classes.ul}>
        <li
          className={
            ctx.selectedBranch === "XYZ" ? classes.li_selected : classes.li
          }
          value={"1"}
          onClick={ctx.selectedBranchHandler}
        >
          XYZ Warszawa, Polska
        </li>
        <li
          className={
            ctx.selectedBranch === "ABC" ? classes.li_selected : classes.li
          }
          value={"2"}
          onClick={ctx.selectedBranchHandler}
        >
          ABC Kraków, Polska
        </li>
        <li
          className={
            ctx.selectedBranch === "RNQ" ? classes.li_selected : classes.li
          }
          value={"3"}
          onClick={ctx.selectedBranchHandler}
        >
          RNQ Berlin, Niemcy
        </li>
      </ul>
    </div>
  );
};
export default AvailableBranches;
