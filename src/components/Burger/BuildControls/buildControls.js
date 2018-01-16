import React from 'react';
import classes from './buildControls.css';

import BuilldControl from './buildControl/buildControl';

const controls = [
    {"label": 'Salad', "type": 'salad'},
    {"label": 'Bacon', "type": 'bacon'},
    {"label": 'Meat', "type": 'meat'},
    {"label": 'Cheese', "type": 'cheese'}
]



// Para propagar el evento al component agregarIngrediente = {props.agregarIngrediente} 
// es valido, pero este shortcut lo ejecuta en el primer 2do nivel 

const buildControls = props => (
    <div className={classes.BuildControls}>
    {controls.map( control => {
       return  <BuilldControl 
        key={control.label} 
        label={control.label}
        type = {control.type}
        agregar = { () => props.agregarIngrediente(control.type) }
         />
    })}
    </div>
);

export default buildControls;