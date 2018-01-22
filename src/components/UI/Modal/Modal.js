import React, { Component } from "react";

import Aux from "../../../hoc/Aux/Aux";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./Modal.css";

class Modal extends Component {
  state = {};
  //Validacion para revisar si es necesario hacer un render al cambiar las props
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.mostrarModal !== this.props.mostrarModal;
  }

  render() {
    return (
      <Aux>
        <Backdrop
          mostrarBackdrop={this.props.mostrarModal}
          cerrarModal={this.props.cerrarModal}
        />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.mostrarModal
              ? "translateY(0)"
              : "translateY(-100vh)",
            opacity: this.props.mostrarModal ? "1" : "0"
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
