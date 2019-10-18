import React from "react";
import ErrorMassege from "./error-massage";

// Вспомагающий компонент, для отлова и обработки ошибок вложеных в него компонентов
export default class ErrorBoundle extends React.Component {
  state = {
    onerror: false
  };

  componentDidCatch() {
    this.setState({ onerror: true });
  }

  render() {
    // В случае возникновения ошибки вернем компонент который служит о ее индикации
    if (this.state.onerror) return <ErrorMassege />;
    // Если ошибки нет, возвращаем вложеные компоненты
    return this.props.children;
  }
}
