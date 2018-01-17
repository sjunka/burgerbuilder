import React from "react";
import Aux from "../../hoc/aux";
import Toolbar from "../Navigation/ToolBar/Toolbar";
import classes from "./Layout.css";

const layout = props => (
  <Aux>
    <div>
      <Toolbar />
    </div>

    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default layout;
