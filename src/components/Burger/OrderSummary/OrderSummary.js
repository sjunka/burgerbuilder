import React, { Component } from "react";

import Aux from "../../../hoc/Aux/Aux";

import Button from "../../UI/Button/Button";

class OrderSumary extends Component {
  state = {};

  render() {
    const totalIngredientes = Object.keys(this.props.ingredientes).map(
      ingredienteKey => {
        return (
          <li key={ingredienteKey}>
            <span style={{ textTransform: "capitalize" }}>
              {ingredienteKey}: {this.props.ingredientes[ingredienteKey]}
            </span>
          </li>
        );
      }
    );

    return (
      <Aux>
        <h3>Tu pedido es el siguiente:</h3>
        <ul>{totalIngredientes}</ul>
        <p>
          El valor total de la compra:{" "}
          <strong>{this.props.hamburguerPrice.toFixed(2)}</strong>
        </p>
        <p>Continuar a Checkout pasarela de pago</p>

        <Button clicked={this.props.cancelarCompra} btnType="Danger">
          Cancelar
        </Button>
        <Button clicked={this.props.aceptarCompra} btnType="Success">
          Continuar
        </Button>
      </Aux>
    );
  }
}

export default OrderSumary;
