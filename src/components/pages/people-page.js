import React, { Component } from 'react';

import Row from '../row';
import { PersonList, PersonDetails } from '../sw-components';
import './pages.css';

export default class PeoplePage extends Component {
  state = {
    selectedItem: null,
  };

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };

  render() {
    const { selectedItem } = this.state;

    const itemList = <PersonList onItemSelected={this.onItemSelected} />;
    const itemDetails = <PersonDetails itemId={selectedItem} />;

    return <Row left={itemList} right={itemDetails} />;
  }
}
