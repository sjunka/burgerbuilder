import React from "react";
import classes from "./Backdrop.css";

const backdrop = props =>
  props.mostrarBackdrop ? (
    <div className={classes.Backdrop} onClick={props.cerrarModal} />
  ) : null;

export default backdrop;
