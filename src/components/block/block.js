import React from "react";
import PropTypes from "prop-types";

// Вспомогательны компонент который оборачивает в отдельный блок вложеные в него компоненты
class Block extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row d-flex">{this.props.children}</div>
      </div>
    );
  }
}

// Проверка что вложенные компоненты точно являются компонентами
Block.propTypes = {
  children: PropTypes.node
};

export default Block;
