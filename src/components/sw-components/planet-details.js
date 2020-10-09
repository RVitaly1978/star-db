import React from 'react';

import ItemDetails, { Record } from '../item-details';
import { withSwapiService } from '../hoc-helpers';

const mapMethodToProps = (swapiService) => {
  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage,
  };
}

const PlanetDetails = (props) => {
  return (
    <ItemDetails {...props} >
      <Record field='population' label='Population' />
      <Record field='rotationPeriod' label='Rotation Period' />
      <Record field='diameter' label='Diameter' />
    </ItemDetails>
  );
};

export default withSwapiService(mapMethodToProps)(PlanetDetails);
