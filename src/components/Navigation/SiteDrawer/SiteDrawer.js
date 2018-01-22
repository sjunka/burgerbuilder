import React from "react";

import Backdrop from "../../UI//Backdrop/Backdrop";

import Logo from "../../UI/Logo//Logo";
import classes from "./SiteDrawer.css";
import NavigationItems from "../NavigationItems/NavigationItems";

import Aux from "../../../hoc/Aux/Aux";

const siteDrawer = props => {
  let clasesDinamicas = [classes.SideDrawer, classes.Close];

  if (props.abrirSideDrawer) {
    clasesDinamicas = [classes.SideDrawer, classes.Open];
  }

  return (
    <Aux>
      <Backdrop
        mostrarBackdrop={props.abrirSideDrawer}
        cerrarModal={props.cerrarSideDrawer}
      />
      <div className={clasesDinamicas.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default siteDrawer;
