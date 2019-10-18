import React, { Component } from "react";

import Block from "../block";
import { StarshipsList, StarshipDetails } from "../sw-component";

// Компонент отвечающий за рендер страницы кораблей, без роутинга
export default class StarshipsPage extends Component {
  state = {
    itemId: null
  };

  selectPerson = itemId => {
    this.setState({ itemId });
  };

  render() {
    return (
      <Block>
        <StarshipsList onItemSelected={this.selectPerson} />
        <StarshipDetails itemId={this.state.itemId} />
      </Block>
    );
  }
}
