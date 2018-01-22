import React, { Component } from "react";

import Aux from "../Aux/Aux";
import classes from "./Layout.css";
import Toolbar from "../../components/Navigation/ToolBar/Toolbar";
import SiteDrawer from "../../components/Navigation/SiteDrawer/SiteDrawer";

class Layout extends Component {
  state = {
    closeSiteDrawer: false
  };

  sideDrawerCloseHandler = () => {
    this.setState({ closeSiteDrawer: false });
  };

  sideDrawerabrirMenu = () => {
    this.setState(prevState => {
      return { closeSiteDrawer: !prevState.closeSiteDrawer };
    });
  };
  render() {
    return (
      <Aux>
        <div>
          <Toolbar abrirMenu={this.sideDrawerabrirMenu} />
          <SiteDrawer
            abrirSideDrawer={this.state.closeSiteDrawer}
            cerrarSideDrawer={this.sideDrawerCloseHandler}
          />
        </div>

        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
