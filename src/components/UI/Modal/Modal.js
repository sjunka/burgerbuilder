import React from "react";
import Aux from "../../../hoc/aux";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./Modal.css";

const modal = props => (
  <Aux>
    <Backdrop
      mostrarBackdrop={props.mostrarModal}
      cerrarModal={props.cerrarModal}
    />
    <div
      className={classes.Modal}
      style={{
        transform: props.mostrarModal ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.mostrarModal ? "1" : "0"
      }}
    >
      {props.children}
    </div>
  </Aux>
);

export default modal;
