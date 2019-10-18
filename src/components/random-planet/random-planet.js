import React from "react";
import PropTypes from "prop-types";

import SwapiService from "../../service";
import Spiner from "../spiner";
import ErrorBoundle from "../error-boundle";
import ErrorMassage from "../error-boundle/error-massage";

import "./random-planet.css";

// Компонент который рендерит случайную планету в указаный промежуток времени
export default class RandomPlanet extends React.Component {
  // Время пере-рендера по умолчанию
  static defaultProps = {
    updateInterval: 10000
  };
  // Указание типизации для параметра отвечающего за время обновления компонента
  static propTypes = {
    updateInterval: PropTypes.number
  };

  state = {
    planet: {},
    onload: true,
    error: false
  };

  swapiService = new SwapiService();

  componentDidMount() {
    const { updateInterval } = this.props;
    this.updatePlanet();
    this.interval = setInterval(() => this.updatePlanet(), updateInterval);
  }
  // Обновление планеты
  updatePlanet() {
    const { getPlanet } = this.swapiService;
    const id = Math.floor(Math.random() * 18) + 2;

    getPlanet(id)
      .then(planet => this.setState({ planet, onload: false }))
      .catch(() => this.onError());
  }
  // Оббработчик ошибок
  onError() {
    this.setState({ error: true });
  }

  render() {
    const { onload, planet , error} = this.state;

    if (error) return <ErrorMassage />;

    const LoadItem = onload ? <Spiner /> : <PlanetView planet={planet} />;

    return (
      <ErrorBoundle>
        <div className="random-planet bg-dark col-12">
          <div className="container">{LoadItem}</div>
        </div>
      </ErrorBoundle>
    );
  }
}
// Компонент отвечающий за отрисовку планеты
const PlanetView = ({ planet }) => {
  const { name, population, rotationPeriod, diameter, id } = planet;
  const img_url = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;

  return (
    <div className="row">
      <div className="img-cont">
        <img src={img_url} className="planet-img" alt="" />
      </div>
      <div className="">
        <h3>{name}</h3>
        <ul className="list-group">
          <li className="list-group-item">Population: {population}</li>
          <li className="list-group-item">Rotation period: {rotationPeriod}</li>
          <li className="list-group-item">Diameter: {diameter}</li>
        </ul>
      </div>
    </div>
  );
};
