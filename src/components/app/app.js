import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import {
  PersonList, PersonDetails,
  PlanetList, PlanetDetails,
  StarshipList, StarshipDetails,
} from '../sw-components';
import ErrorButton from '../error-button';
import ErrorBoundary from '../error-boundary';
import { SwapiServiceProvider } from '../swapi-service-context';
import SwapiService from '../../services/swapi-service';

import './app.css';

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
  }

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      };
    });
  }

  render() {
    const { showRandomPlanet } = this.state;

    const planet = showRandomPlanet
      ? <RandomPlanet />
      : null;

    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={this.swapiService}>
          <div className='stardb-app'>
            <Header />
            {planet}

            <div className='row mb2 button-row'>
              <button
                className="toggle-planet btn btn-warning btn-lg"
                onClick={this.toggleRandomPlanet}>
                Toggle Random Planet
              </button>
              <ErrorButton />
            </div>

            <PeoplePage List={PersonList} Details={PersonDetails} />
            <PeoplePage List={PlanetList} Details={PlanetDetails} />
            <PeoplePage List={StarshipList} Details={StarshipDetails} />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  }
};
