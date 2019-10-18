import React from "react";
// Cоздание вспомогательного контекста, для свободного доступа к сервисам из любого компонента
const {
  Provider: SwapiProvider,
  Consumer: SwapiConsumer
} = React.createContext();

export { SwapiProvider, SwapiConsumer };
