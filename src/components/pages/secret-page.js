import React from "react";
import {Redirect} from 'react-router-dom';

// Страница которая видна только "залогиненым" пользователям
const SecretPage = ({ isLoggedIn }) => {
  if (isLoggedIn)
    return (
      <div className="jumbotron text-center">
        <h3>This page is full of secrets!!!</h3>
      </div>
    );
  
  // Если пользователь не залогинен то "перенаправляет" на страницу логина
  return (
   <Redirect to="/login"/>
  );
};

export default SecretPage;
