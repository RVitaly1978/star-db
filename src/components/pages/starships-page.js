import React from 'react';
import { withRouter } from 'react-router-dom';

import { StarshipList } from '../sw-components';

import './pages.css';

const StarshipsPage = ({ history }) => {
  const onItemSelected = (id) => {
    history.push(`${id}`);
  };

  return (
    <StarshipList onItemSelected={onItemSelected} />
  );
}

export default withRouter(StarshipsPage);
