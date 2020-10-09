import React, { Component } from 'react';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import ItemView from './item-view';

import './item-details.css';

export default class ItemDetails extends Component {
  state = {
    item: null,
    loading: true,
    error: false,
    image: null,
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  onLoading = () => {
    this.setState({
      item: {},
      loading: true,
      error: false,
      image: null,
    });
  }

  onDataLoaded = (item) => {
    const { getImageUrl } = this.props;

    this.setState({
      item,
      loading: false,
      error: false,
      image: getImageUrl(item),
    });
  }

  onError = () => {
    this.setState({
      item: {},
      loading: false,
      error: true,
      image: null,
    });
  }

  updateItem = () => {
    const { itemId, getData } = this.props;

    if (!itemId) return;

    this.onLoading();

    getData(itemId)
      .then(this.onDataLoaded)
      .catch(this.onError);
  }

  render() {
    const { item, loading, error, image } = this.state;
    const { children } = this.props;

    if (item === null) {
      return <span>Select a item from a list</span>;
    }

    const errorMessage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = (loading || error) ? null : (
      <ItemView item={item} image={image}>
        {children}
      </ItemView>
    );

    return (
      <div className='item-details card'>
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  }
};
