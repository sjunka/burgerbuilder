import React, {Component} from 'react'
import Aux from '../../hoc/aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/buildControls'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7

}

class BurgerBuilder extends Component {

    state = {
        ingredients : {
            bacon: 0,
            cheese: 0,
            meat: 0,
            salad: 0,
        },
        totalPrice: 5, 
    }

    addIngredientHandler = type => {

        
        const valorAnterior = this.state.ingredients[type];

        console.log(valorAnterior); 

        const valorNuevo = valorAnterior + 1; 

        const nuevoIngrediente = {
            ...this.state.ingredients,
        };
        
        nuevoIngrediente[type] = valorNuevo;

        const valorUnitario = INGREDIENT_PRICES[type];

        const precioAnterior = this.state.totalPrice;

        const precioNuevo = precioAnterior + valorUnitario ;

        this.setState(
            {
                ingredients : nuevoIngrediente,
                totalPrice: precioNuevo
            }
        );
    }

    removeIngredient  = type => {

    }
    render (){
        return (
            <Aux>
                <Burger ingridients = {this.state.ingredients} />
                <BuildControls
                    agregarIngrediente = {this.addIngredientHandler}
                />
            </Aux>
                
        );
    }
}
export default BurgerBuilder;