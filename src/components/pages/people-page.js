import React from "react";
import { withRouter } from "react-router-dom";

import { PeopleList } from "../sw-component";

// Компонент отвечающий за страницу с персонажами, при выборе отрендерит выбранго персонажа вместо списка
const PeoplePage = ({ history }) => {
  return (
    <PeopleList
      coll="col-12"
      onItemSelected={itemId => {
        // При помощи роутинга реализуем, простой переход на страницу персонажа
        history.push(itemId);
      }}
    />
  );
};

export default withRouter(PeoplePage);
