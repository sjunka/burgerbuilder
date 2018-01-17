import React, { Component } from "react";
import Aux from "../../hoc/aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/buildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      bacon: 0,
      cheese: 0,
      meat: 0,
      salad: 0
    },
    totalPrice: 5,

    purchasable: false,

    hacerCheckout: false
  };

  modoCheckoutContinuar = () => {
    alert("se comprola tales papo");
  };

  cerrarModoCheckout = () => {
    this.setState({ hacerCheckout: false });
  };

  modoCheckout = () => {
    //Activa el modo hacerCheckout para desplegar el Modal
    this.setState({ hacerCheckout: true });
  };

  updatePurchaseState(ingredientes) {
    //compraValida permite validar si hay ingredientes dentro del arreglo
    //actualiza el estado de purchasable

    const compraValida = Object.keys(ingredientes)
      .map(ingredienteKey => {
        return ingredientes[ingredienteKey];
      })
      .reduce((compraValida, elementoIterado) => {
        return compraValida + elementoIterado;
      }, 0);

    this.setState({
      purchasable: compraValida > 0
    });
  }

  addIngredientHandler = type => {
    //Metodo para agregar ingredientes a la orden de compra

    const valorAnterior = this.state.ingredients[type];

    const valorNuevo = valorAnterior + 1;

    const nuevoIngrediente = {
      ...this.state.ingredients
    };

    nuevoIngrediente[type] = valorNuevo;

    const valorUnitario = INGREDIENT_PRICES[type];

    const precioAnterior = this.state.totalPrice;

    const precioNuevo = precioAnterior + valorUnitario;

    this.setState({
      ingredients: nuevoIngrediente,
      totalPrice: precioNuevo
    });

    //Permite realizar compra

    this.updatePurchaseState(nuevoIngrediente);
  };

  removeIngredient = type => {
    //Metodo para remover ingredientes de la orden de compra

    const valorAnterior = this.state.ingredients[type];

    //Validacion; Existen ingredientes en la orden, si no hay salir

    if (valorAnterior <= 0) {
      return;
    }

    const valorNuevo = valorAnterior - 1;

    const nuevoIngrediente = {
      ...this.state.ingredients
    };

    nuevoIngrediente[type] = valorNuevo;

    const valorUnitario = INGREDIENT_PRICES[type];

    const precioAnterior = this.state.totalPrice;

    const precioNuevo = precioAnterior - valorUnitario;

    this.setState({
      ingredients: nuevoIngrediente,
      totalPrice: precioNuevo
    });

    //Permite realizar compra

    this.updatePurchaseState(nuevoIngrediente);
  };
  render() {
    let disabledInfo = {
      ...this.state.ingredients
    };

    // Validacion: Esta vacio algun ingrediente?: true - false

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Aux>
        <Modal
          mostrarModal={this.state.hacerCheckout}
          cerrarModal={this.cerrarModoCheckout}
        >
          <OrderSummary
            ingredientes={this.state.ingredients}
            cancelarCompra={this.cerrarModoCheckout}
            aceptarCompra={this.modoCheckoutContinuar}
            hamburguerPrice={this.state.totalPrice}
          />
        </Modal>
        <Burger ingridients={this.state.ingredients} />
        <BuildControls
          agregarIngrediente={this.addIngredientHandler}
          removerIngrediente={this.removeIngredient}
          disabled={disabledInfo}
          hamburguerPrice={this.state.totalPrice}
          purchasable={this.state.purchasable}
          enCompra={this.modoCheckout}
        />
      </Aux>
    );
  }
}
export default BurgerBuilder;
