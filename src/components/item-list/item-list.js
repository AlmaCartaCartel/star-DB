import React from "react";
import PropTypes from "prop-types";

import "./item-list.css";
// Компонент отвечающий за отрисовку всех списков-меню в spa, логика обновления и отлова ошибок убрана для удобства в HOC компонент hoc-helper.js
const ItemList = props => {
  const { data, onItemSelected, children: renderLabel , coll} = props;

  const itemsList = data.map(item => {
    return (
      <li
        className="list-group-item"
        key={item.id}
        onClick={() => onItemSelected(item.id)}
      >
        {renderLabel(item)}
      </li>
    );
  });

  return (
    <div className={`${coll} item-list container col-12`}>
      <ul className="list-group row">{itemsList}</ul>
    </div>
  );
};
// Указание значений по умолчанию, для переданых в компонент пропсов
ItemList.defaultProps = {
  onItemSelected: () => {},
  coll: 'col-lg-4'
};
// Указание типизации для передаваемых пропсов, при помщи библеотеки prop-types
ItemList.propTypes = {
  onItemSelected: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ItemList;
