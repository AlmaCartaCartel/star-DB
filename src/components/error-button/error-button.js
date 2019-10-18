import React from "react";

// Компонент специально создающий ощибку, для проверки как spa отреагирует на нее
export default class ErrorBtn extends React.Component {
  state = {
    error: false
  };

  render() {
    console.log("errror btn");

    if (this.state.error) {
        // Для эмуляции ощибки, передаем значение в несуществующие свойство 
      this.bfj.sdg = 0;
    }

    return (
      <div className="conteiner">
        <div className="row">
          <button
            className="btn btn-danger"
            onClick={() => this.setState({ error: true })}
          >
            Trow error
          </button>
        </div>
      </div>
    );
  }
}
