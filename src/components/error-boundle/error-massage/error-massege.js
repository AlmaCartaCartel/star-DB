import React from "react";

import "./error-massage.css";
import Img from "./deth-star.png";

const ErrorMassege = () => {
  return (
    <div className="error" role="alert">
      <img src={Img} alt="error-massage" />
      <h2>BOOM!</h2>
      <p>something has gone terribly wrong</p>
      <p>(but we alredy sent droid to fix it)</p>
    </div>
  );
};

export default ErrorMassege;
