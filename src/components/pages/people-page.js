import React from 'react';
import { withRouter } from 'react-router-dom';

import Row from '../row';
import { PersonList, PersonDetails } from '../sw-components';

import './pages.css';

const PeoplePage = ({ history, match }) => {
  const { id } = match.params;

  const onItemSelected = (id) => {
    history.push(`${id}`);
  };

  return (
    <Row
      left={<PersonList onItemSelected={onItemSelected} />}
      right={<PersonDetails itemId={id} />}
    />
  );
}

export default withRouter(PeoplePage);
