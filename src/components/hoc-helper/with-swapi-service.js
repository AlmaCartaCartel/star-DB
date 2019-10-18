import React from "react";

import { SwapiConsumer } from "../swapi-service-context";
// Вспомогательный компонент высшего порядка, для передачи контекста в виде сервиса
const withSwapiService = Wraped => {
  return props => {
    return (
      <SwapiConsumer>
        {swapiService => {
          return <Wraped {...props} swapiService={swapiService} />;
        }}
      </SwapiConsumer>
    );
  };
};

export default withSwapiService;
