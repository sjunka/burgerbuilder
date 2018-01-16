import React from 'react';
import classes from './buildControl.css';



const buildControl = props => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>
            {props.label}
        </div>
        <button
            className={classes.Less}
            onClick={props.remover}
            disabled = { props.disabled }
            >Eliminar</button>
        <button 
            className={classes.More}
            onClick = {props.agregar}
        >Agregar</button>
    </div>
);

export default buildControl;
