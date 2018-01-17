import React from "react";
import classes from "./buildControls.css";

import BuilldControl from "./buildControl/buildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Meat", type: "meat" },
  { label: "Cheese", type: "cheese" }
];

// Para propagar el evento al component agregarIngrediente = {props.agregarIngrediente}
// es valido, pero este shortcut lo ejecuta en el primer 2do nivel

const buildControls = props => (
  <div className={classes.BuildControls}>
    <p>
      El precio de la hamburguesa:{" "}
      <strong>{props.hamburguerPrice.toFixed(2)}</strong>
    </p>

    {controls.map(control => {
      return (
        <BuilldControl
          key={control.label}
          label={control.label}
          type={control.type}
          agregar={() => props.agregarIngrediente(control.type)}
          remover={() => props.removerIngrediente(control.type)}
          disabled={props.disabled[control.type]}
        />
      );
    })}

    <button
      className={classes.OrderButton}
      disabled={!props.purchasable}
      onClick={props.enCompra}
    >
      Comprar
    </button>
  </div>
);

export default buildControls;
