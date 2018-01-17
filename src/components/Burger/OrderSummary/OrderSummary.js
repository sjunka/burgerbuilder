import React from "react";
import Aux from "../../../hoc/aux";
import Button from "../../UI/Button/Button";

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
      <p>
        El valor total de la compra:{" "}
        <strong>{props.hamburguerPrice.toFixed(2)}</strong>
      </p>
      <p>Continuar a Checkout pasarela de pago</p>

      <Button clicked={props.cancelarCompra} btnType="Danger">
        Cancelar
      </Button>
      <Button clicked={props.aceptarCompra} btnType="Success">
        Continuar
      </Button>
    </Aux>
  );
};

export default orderSumary;
