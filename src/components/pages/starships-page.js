import React, { Component } from 'react';

import Row from '../row';
import { StarshipList, StarshipDetails } from '../sw-components';
import './pages.css';

export default class StarshipsPage extends Component {
  state = {
    selectedItem: null,
  };

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };

  render() {
    const { selectedItem } = this.state;

    const itemList = <StarshipList onItemSelected={this.onItemSelected} />;
    const itemDetails = <StarshipDetails itemId={selectedItem} />;

    return <Row left={itemList} right={itemDetails} />;
  }
}
