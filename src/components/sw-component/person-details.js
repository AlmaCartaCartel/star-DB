import React from "react";
import { Item, Record } from "../item-details";
import { withSwapiService } from "../hoc-helper";
// Конфигурация компонента отвечающего за отрисовку выбраного из списка персонажа
// swapiService присвоится через withSwapiService
const PersonDetails = ({ itemId, swapiService }) => {
  return (
    <Item itemId={itemId} getData={swapiService.getPerson}>
      <Record field="gender" label="Gender" />
      <Record field="eyeColor" label="Eye Color" />
      <Record field="birthYear" label="Birth Year" />
    </Item>
  );
};

export default withSwapiService(PersonDetails);
