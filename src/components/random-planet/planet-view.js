import React from 'react';

const PlanetView = ({
  data: {id, name, population, rotationPeriod, diameter},
  image,
}) => {
  return (
    <>
      <img className='planet-image'
        src={image}
        alt='planet'
      />

      <div>
        <h4>{name}</h4>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <span className='term'>Population</span>
            <span>{population}</span>
          </li>
          <li className='list-group-item'>
            <span className='term'>Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className='list-group-item'>
            <span className='term'>Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default PlanetView;
