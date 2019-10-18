import React from "react";
import { Item, Record } from "../item-details";

import { withSwapiService } from "../hoc-helper";
// Конфигурация компонента отвечающего за отрисовку выбраного из списка коробля
// swapiService присвоится через withSwapiService
const StarshipDetails = ({ itemId, swapiService }) => {
  return (
    <Item itemId={itemId} getData={swapiService.getStarship}>
      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
      <Record field="costInCredits" label="Cost" />
    </Item>
  );
};

export default withSwapiService(StarshipDetails);
