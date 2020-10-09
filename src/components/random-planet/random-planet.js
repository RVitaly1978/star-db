import React, { Component } from 'react';

import { withSwapiService } from '../hoc-helpers';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import PlanetView from './planet-view';

import './random-planet.css';

const mapMethodToProps = (swapiService) => {
  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage,
  };
}

class RandomPlanet extends Component {
  static defaultProps = {
    updateInterval: 10000,
  };

  state = {
    data: {},
    loading: true,
    error: false,
    image: null,
  };

  componentDidMount() {
    const { updateInterval } = this.props;
    this.update();
    this.interval = setInterval(this.update, updateInterval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onDataLoaded = (data) => {
    const { getImageUrl } = this.props;

    this.setState({
      data,
      loading: false,
      error: false,
      image: getImageUrl(data),
    });
  }

  onError = () => {
    this.setState({
      data: {},
      error: true,
      loading: false,
      image: null,
    });
  }

  update = () => {
    const id = Math.floor(Math.random()*20) + 2;
    const { getData } = this.props;

    getData(id)
      .then(this.onDataLoaded)
      .catch(this.onError);
  }

  render() {
    const { data, loading, error, image } = this.state;
    const hasData = !(loading || error);

    const errorMessage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <PlanetView data={data} image={image} /> : null;

    return (
      <div className='random-planet jumbotron rounded'>
        {spinner}
        {content}
        {errorMessage}
      </div>
    );
  }
};

export default withSwapiService(mapMethodToProps)(RandomPlanet);
