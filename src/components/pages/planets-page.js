import React from "react";
import { withRouter } from 'react-router-dom';


import Block from "../block";
import { PlanetsList, PlanetDetails } from "../sw-component";

// Компонент отвечающий за отрисовку планеты и списка
const PlanetsPage = ({history, match}) => {
  const {id} = match.params;

    return (
      <Block>
        <PlanetsList onItemSelected={(id) => history.push(id)}/>
        <PlanetDetails itemId={id} />
      </Block>
    );

}

export default withRouter(PlanetsPage);