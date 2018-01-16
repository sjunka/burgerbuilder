import React, {Component} from 'react'
import Aux from '../../hoc/aux'
import Burger from '../../components/Burger/Burger'
class BurgerBuilder extends Component {

    state = {
        ingridients : {
            bacon: 1,
            cheese: 1,
            meat: 1,
            salad: 1,
        }
    }
    render (){
        return (
            <Aux>
                <Burger ingridients = {this.state.ingridients} />
                <div>controls</div>
            </Aux>
                
        );
    }
}
export default BurgerBuilder;