import React from 'react'

import classes from './Burger.css'
import BurgerIngridient from './BurgerIngridient/BurgerIngridient'

const burger = props => {
    
    let transformedIngridients = Object.keys(props.ingridients)
    .map( igKey => {
        return [...Array( props.ingridients[igKey] )].map( (_, i) => {
            return <BurgerIngridient key={igKey + i} type={igKey}/>
        } );
    } )
    .reduce((array, element) => {
        return array.concat(element)
    }, [] );

    if (transformedIngridients.length === 0) {
        transformedIngridients =  <p>Agregar ingredientes a la hamburguesa</p>
    } 
    
    return ( 
        <div className={classes.Burger}>
            <BurgerIngridient type="bread-top"/>
           {transformedIngridients}
            <BurgerIngridient type="bread-bottom"/>
        </div>
     );
  };
  
  export default burger;