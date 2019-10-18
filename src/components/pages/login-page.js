import React from "react";
import {Redirect} from 'react-router-dom';

// Компонент фейковой страницы входа, если залогинен то перенаправляет при помощи роутинга на главную страницу
const LoginPage = ({ isLoggedIn, onLogin }) => {
    if(isLoggedIn) return <Redirect to = "/"/>

  return (
    <div className="jumbotron">
      <p>Login to see secret page!</p>
      {/* Кнопка для логина */}
      <button className="btn btn-primary" onClick={onLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginPage;