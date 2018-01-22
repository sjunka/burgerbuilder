import React from "react";
import classes from "./Logo.css";
const logo = props => {
  return (
    <div className={classes.Logo}>
      <img
        src={"https://www.freelogodesign.org/img/slide-logo-2.png"}
        alt="imagen"
      />
    </div>
  );
};

export default logo;
