import React from "react";
import Logo from "../../UI/Logo/Logo";
import NavigationItems from "../../Navigation/NavigationItems/NavigationItems";

import classes from "./Toolbar.css";

const toolbar = props => {
  return (
    <header className={classes.Toolbar}>
      <div>menu</div>
      <Logo />
      <nav>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default toolbar;
