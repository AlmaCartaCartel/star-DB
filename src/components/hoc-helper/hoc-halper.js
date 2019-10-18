import React from "react";

import Spiner from "../spiner";
import ErrorMassage from "../error-boundle/error-massage";

// Статичный компонент для индикации загрузки страницы
const LoadIndicator = (
  <div className="container col-lg-4 col-12 d-flex justify-content-center align-items-center">
    <div className="row">
      <Spiner />
    </div>
  </div>
);

// Компонент высшего порядка отвечающий за логику в компоненте item-list 
const withData = (View, getData) => {
  return class extends React.Component {
    state = {
      data: null,
      error: false,
      load: true
    };
// Ф-я getData отвечает за получение, данных с сервера передается параметрами в файле конечной конфигурации sw-component
    componentDidMount() {
      getData()
        .then(data => {
          this.setState({ data , load: false});
        })
        .catch(() => {
          this.setState({ error: true });
        });
    }

    render() {
      const { data, load, error } = this.state;

      if (load) return LoadIndicator;

      if (error) return ErrorMassage;

      return <View {...this.props} data={data} />;
    }
  };
};
export { withData };
