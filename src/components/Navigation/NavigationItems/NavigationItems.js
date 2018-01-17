import React from "react";
import NavigationItem from "../NavigationItems/NavigationItem/NavigationItem";
import classes from "./NavigationItems.css";

const navigationItems = props => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="#" active={true}>
        Hamburguesas
      </NavigationItem>

      <NavigationItem link="#">Checkout</NavigationItem>
    </ul>
  );
};

export default navigationItems;
