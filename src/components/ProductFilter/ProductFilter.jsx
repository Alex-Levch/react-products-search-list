import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './productFilter.scss';

// const useLocalStorage = (key, initialValue) => {
//   const [value, setValue] = useState(
//     JSON.parse(localStorage.getItem(key)) || initialValue
//   );

//   const save = (value) => {
//     setValue(value);
//     localStorage.setItem(key, JSON.stringify(value));
//   };

//   return [value, save]
// }


export const ProducFilter = ({
  titleValue,
  setTitleValue,
  applyTitleQuery,
}) => {
// const [token, setToken] = useLocalStorage('')

// const {nameQuery, dateQuery, priceRange} = searchParameters;

const handleTitleChange = ({ target }) => {
  setTitleValue(target.value);
  applyTitleQuery(target.value)
}

  // const handleSubmitChange = (e) => {
  //   e.preventDefault();
  // }
  return (
    <form
      className="product-filter"
      // onSubmit={}
    >
      <label
        className="product-filter__title-label"
      >
        <input
          type="text"
          className="product-filter__title-field"
          placeholder="Search"
          value={titleValue}
          onChange={handleTitleChange}
        />
      </label>
      <div
        className="product-filter__date-container"
      >
        <input
          type="date"
          className="product-filter__date-from"
        />
      </div>
      <div
        className="product-filter__price-container"
      >
        <input
          type="range"
          min="1"
          max="400"
          className="product-filter__price-range"
        />
      </div>
    </form>
  );
};

ProducFilter.propTypes = {
  titleValue: PropTypes.string.isRequired,

  setTitleValue: PropTypes.func.isRequired,
  applyTitleQuery: PropTypes.func.isRequired,
};
