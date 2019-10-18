import React from "react";
import SwapiService from "../../service";
import { withData } from "../hoc-helper";
import ItemList from "../item-list";

const swapiService = new SwapiService();
// Вспомогательная ф-я которая передаст в переданый компонент, ф-ю конфигурации
const withChildFunc = (Wraped, renderFunc) => {
  return props => {
    return <Wraped {...props}>{renderFunc}</Wraped>;
  };
};
// Ф-и конфигурации для разных компонентов

// Персонажи
const renderName = ({ name }) => <span>{name}</span>;

// Корабли
const renderNameAndModel = ({ name, model }) => (
  <span>
    {name} ({model})
  </span>
);

// Планеты
const renderNameAndDiameter = ({ name, diameter }) => (
  <span>
    {name} ({diameter})
  </span>
);

// Конечная конфигурация компонентов
const PeopleList = withData(
  withChildFunc(ItemList, renderName),
  swapiService.getAllPeople
);

const PlanetsList = withData(
  withChildFunc(ItemList, renderNameAndDiameter),
  swapiService.getAllPlanets
);

const StarshipsList = withData(
  withChildFunc(ItemList, renderNameAndModel),
  swapiService.getAllStarships
);

export { PeopleList, PlanetsList, StarshipsList };
