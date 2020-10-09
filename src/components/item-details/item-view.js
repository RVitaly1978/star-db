import React from 'react';

import ErrorButton from '../error-button';

const ItemView = ({ item, image, children }) => {
  const { name } = item;

  return (
    <>
      <img className='item-image'
        src={image}
        alt='item'
      />

      <div className='card-body'>
        <h4>{name}</h4>
        <ul className='list-group list-group-flush'>
          {
            React.Children.map(children, (child) => {
              return React.cloneElement(child, { item });
            })
          }
          <ErrorButton />
        </ul>
      </div>
    </>
  );
}

export default ItemView;
