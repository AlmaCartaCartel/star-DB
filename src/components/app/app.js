import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorBoundle from "../error-boundle";
import Block from "../block";

import SwapiService from "../../service";
import { SwapiProvider } from "../swapi-service-context";
import {
  PeoplePage,
  StarshipsPage,
  PlanetsPage,
  LoginPage,
  SecretPage
} from "../pages";
import { PersonDetails } from "../sw-component";

import "./app.css";

export default class App extends React.Component {
  state = {
    isLoggedIn: false
  };

  onLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  swapiService = new SwapiService();

  render() {
    const { isLoggedIn } = this.state;

    return (
      <div className="container justify-content-center">
        <ErrorBoundle>
          <SwapiProvider value={this.swapiService}>
            <Router>
              <Block>
                <Header />
                <RandomPlanet />
              </Block>
              <Switch>
                <Route
                  path="/"
                  render={() => {
                    return <h2>Welcome to StarDB</h2>;
                  }}
                  exact
                />
                <Route path="/people" exact component={PeoplePage} />

                <Route path="/planets/:id?" exact component={PlanetsPage} />
                <Route path="/starships" exact component={StarshipsPage} />

                <Route
                  path="/people/:id"
                  render={({ match }) => {
                    const { id } = match.params;

                    return <PersonDetails itemId={id} />;
                  }}
                />

                <Route
                  path="/login"
                  render={() => {
                    return (
                      <LoginPage
                        isLoggedIn={isLoggedIn}
                        onLogin={this.onLogin}
                      />
                    );
                  }}
                />
                <Route
                  path="/secret-page"
                  render={() => {
                    return <SecretPage isLoggedIn={isLoggedIn} />;
                  }}
                />
                <Route render={() => <h2> Page not found</h2>} />
              </Switch>
            </Router>
          </SwapiProvider>
        </ErrorBoundle>
      </div>
    );
  }
}
