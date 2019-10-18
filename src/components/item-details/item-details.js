import React from "react";

import SwapiService from "../../service";
import Spiner from "../spiner";

import "./item-details.css";
// Компонент-шаблон, для отоброжания характеристики выбраного(ой) палнеты, персонажа или корабля
// В этот компонент передается только опцыи field и label, а item добавится уже в основном компоненте 
const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

export { Record };
// Сообщение показывается при первом заходе на страницу
const SelectItem = (
  <div className="container col-8">
    <div className="item-details card row justify-content-center">
      <span>Select a item from a list</span>
    </div>
  </div>
);

export default class Item extends React.Component {
  swapiService = new SwapiService();

  state = {
    item: null,
    load: false
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.setState({ load: true });
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData } = this.props;
    // Если передано некоректное id
    if (!itemId) {
      return;
    }

    getData(itemId).then(item => {
      this.setState({
        item,
        load: false
      });
    });
  }

  render() {
    const { item, load } = this.state;

    if (load)
      return (
        <div className="container col-8">
          <div className="item-details card row justify-content-center">
            <Spiner />
          </div>
        </div>
      );

    if (item === null) return SelectItem;

    const { name, img } = item;

    return (
      <div className="container col-8">
        <div className="item-details card row">
          <img className="item-image" src={img} alt="item" />

          <div className="card-body">
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
              {/* Сюда передаются компоненты Record, и путем клонирывание создаются такие же елеиенты но с правельным item*/}
              {React.Children.map(this.props.children, child => {
                return React.cloneElement(child, { item });
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
