import React, { Component } from 'react';

import Row from '../row';
import { PlanetList, PlanetDetails } from '../sw-components';

import './pages.css';

export default class PlanetsPage extends Component {
  state = {
    selectedItem: null,
  };

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };

  render() {
    const { selectedItem } = this.state;

    const itemList = <PlanetList onItemSelected={this.onItemSelected} />;
    const itemDetails = <PlanetDetails itemId={selectedItem} />;

    return <Row left={itemList} right={itemDetails} />;
  }
}
