import React from "react";
import { Item, Record } from "../item-details";

import { withSwapiService } from "../hoc-helper";
// Конфигурация компонента отвечающего за отрисовку выбраной из списка планеты
// swapiService присвоится через withSwapiService
const PlanetDetails = ({ itemId, swapiService }) => {
  return (
    <Item itemId={itemId} getData={swapiService.getPlanet}>
      <Record field="population" label="Population" />
      <Record field="rotationPeriod" label="Rotation Period" />
      <Record field="diameter" label="Diameter" />
    </Item>
  );
};

export default withSwapiService(PlanetDetails);
