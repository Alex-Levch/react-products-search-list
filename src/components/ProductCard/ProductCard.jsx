import React from 'react';

import './productCard.scss';

export const ProductCard = ({
  title,
  price,
  thumbnail,
}) => {

  return (
    <div className="card">
      <h3 className="card__title">
        {title}
      </h3>
      <p className="card__price">
        {price}
      </p>
      <p className="card__thumbnail">
        {thumbnail}
      </p>
    </div>
  );
};
