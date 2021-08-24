import classes from "./Text.module.css";

const Text = (props) => <p className={classes.Text}>{props.children}</p>;

export default Text;
