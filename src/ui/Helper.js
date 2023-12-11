import "./Helper.css";

function Helper(props) {
  const classes = "helper " + props.className;

  return <div className={classes}>{props.children}</div>
}

export default Helper;
