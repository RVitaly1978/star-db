import React from 'react';
import { withRouter } from 'react-router-dom';

import { StarshipList } from '../sw-components';

import './pages.css';

const StarshipsPage = ({ history }) => {
  const onItemSelected = (itemId) => {
    history.push(`/starships/${itemId}`);
  };

  return (
    <StarshipList onItemSelected={onItemSelected} />
  );
}

export default withRouter(StarshipsPage);
