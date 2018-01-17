import React from "react";
import Aux from "../../../hoc/aux";

const orderSumary = props => {
  const totalIngredientes = Object.keys(props.ingredientes).map(
    ingredienteKey => {
      return (
        <li key={ingredienteKey}>
          <span style={{ textTransform: "capitalize" }}>
            {ingredienteKey}: {props.ingredientes[ingredienteKey]}
          </span>
        </li>
      );
    }
  );

  return (
    <Aux>
      <h3>Tu pedido es el siguiente:</h3>
      <p>La especialidad de la casa solo para ti: </p>
      <ul>{totalIngredientes}</ul>
      <p>Continuar a Checkout pasarela de pago</p>
    </Aux>
  );
};

export default orderSumary;
