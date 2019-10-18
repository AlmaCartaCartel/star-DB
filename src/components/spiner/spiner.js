import React from "react";

import "./spiner.css";
// Компонент индикатор загрузки
const Spiner = () => {
  return (
    <div className="row justify-content-center">
      <div className="lds-css ng-scope">
        <div className="lds-double-ring">
          <div></div>
          <div></div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spiner;
