import React from "react";
import classes from "./Logo.css";
const logo = props => {
  return (
    <div>
      <img
        className={classes.Logo}
        src={"https://www.freelogodesign.org/img/slide-logo-2.png"}
        alt="imagen"
      />
    </div>
  );
};

export default logo;
