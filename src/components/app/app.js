import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from '../header';
import RandomPlanet from '../random-planet';
import {
  PeoplePage, PlanetsPage, StarshipsPage, SecretPage, LoginPage,
} from '../pages';
import { StarshipDetails } from '../sw-components';
import ErrorButton from '../error-button';
import ErrorBoundary from '../error-boundary';

import { SwapiServiceProvider } from '../swapi-service-context';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';

import './bootstrap.min.css';
import './app.css';

export default class App extends Component {
  state = {
    showRandomPlanet: false,
    swapiService: new DummySwapiService(),
    isLoggedIn: false,
  }

  onLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  }

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service = swapiService instanceof SwapiService
        ? DummySwapiService
        : SwapiService;

      return {
        swapiService: new Service(),
      };
    });
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      };
    });
  }

  render() {
    const { showRandomPlanet, isLoggedIn } = this.state;

    const planet = showRandomPlanet
      ? <RandomPlanet />
      : null;

    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
            <div className='stardb-app'>
              <Header onServiceChange={this.onServiceChange} />
              {planet}

              <div className='row mb2 button-row'>
                <button
                  className="toggle-planet btn btn-warning btn-lg"
                  onClick={this.toggleRandomPlanet}>
                  Toggle Random Planet
                </button>
                <ErrorButton />
              </div>

              <Switch>
                <Route
                  path='/' exact
                  render={() => <h2>Welcome to StarDB</h2>} />
                <Route path='/people/:id?' component={PeoplePage} />
                <Route path='/planets' component={PlanetsPage} />
                <Route path='/starships' exact component={StarshipsPage} />
                <Route
                  path='/starships/:id'
                  render={({ match }) => {
                    const { id } = match.params;
                    return <StarshipDetails itemId={id} />
                  }}
                />

                <Route
                  path='/secret'
                  render={() => (
                    <SecretPage isLoggedIn={isLoggedIn} />
                  )} />

                <Route
                  path='/login'
                  render={() => (
                    <LoginPage
                      isLoggedIn={isLoggedIn}
                      onLogin={this.onLogin} />
                  )} />

                <Route render={() => <h2>404 in StarDB</h2>} />
              </Switch>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  }
};
