import React from 'react'

import classses from '../BurgerIngridient/BurgerIngridient.css'

const burgerIngridient = ( props ) => {
    let ingridient = null;

    switch (props.type) {
        case ('bread-bottom'):
            ingridient = <div className={classes.BreadBottom}></div>;
            break;
        case ('breadTop'):
             ingridient = <div className={classes.BreadTop}>
                             <div className={classes.Seeds1}></div>
                             <div className={classes.Seeds2}></div>
                          </div>;
             break;
        case ('meat'):
            ingridient = <div className={classes.Meat}></div>;
            break;
        case ('cheese'):
            ingridient = <div className={classes.Cheese}></div>;
            break;
        case ('bacon'):
            ingridient = <div className={classes.Bacon}></div>;
            break;
        case ('salad'):
            ingridient = <div className={classes.Salad}></div>;
            break;
        default:
            ingridient = null;
        
    }

    return ingridient;
};

export default burgerIngridient;

