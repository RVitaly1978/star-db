import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import PersonView from './person-view';

import './person-details.css';

export default class PersonDetails extends Component {
  swapiService = new SwapiService();

  state = {
    person: null,
    loading: true,
    error: false,
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  onLoading = () => {
    this.setState({
      person: {},
      loading: true,
      error: false,
    });
  }

  onDataLoaded = (person) => {
    this.setState({
      person,
      loading: false,
      error: false,
    });
  }

  onError = () => {
    this.setState({
      person: {},
      loading: false,
      error: true,
    });
  }

  updatePerson = () => {
    const { personId } = this.props;

    if (!personId) return;

    this.onLoading();

    this.swapiService
      .getPerson(personId)
      .then(this.onDataLoaded)
      .catch(this.onError);
  }

  render() {
    const { person, loading, error } = this.state;
    const hasData = !(loading || error);

    const errorMessage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <PersonView person={person} /> : null;

    if (person === null) {
      return <span>Select a person from a list</span>;
    }

    return (
      <div className='person-details card'>
        {spinner}
        {content}
        {errorMessage}
      </div>
    );
  }
};
