import React from "react";
import Logo from "../../UI/Logo/Logo";
import NavigationItems from "../../Navigation/NavigationItems/NavigationItems";
import SideDrawerToggle from "../SiteDrawer/SideDrawerToggle/SideDrawerToggle";

import classes from "./Toolbar.css";

const toolbar = props => {
  return (
    <header className={classes.Toolbar}>
      <SideDrawerToggle abrirMenu={props.abrirMenu} />

      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default toolbar;
