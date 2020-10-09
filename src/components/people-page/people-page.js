import React, { Component } from 'react';

import Row from '../row';
import ErrorBoundary from '../error-boundary';

import './people-page.css';

export default class PeoplePage extends Component {
  state = {
    selectedItem: null,
  };

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };

  render() {
    const { selectedItem } = this.state;
    const { List, Details } = this.props;

    const itemList = (
      <List onItemSelected={this.onItemSelected} />
    );

    const itemDetails = (
      <ErrorBoundary>
        <Details itemId={selectedItem} />
      </ErrorBoundary>
    );

    return (
      <Row left={itemList} right={itemDetails} />
    );
  }
}
