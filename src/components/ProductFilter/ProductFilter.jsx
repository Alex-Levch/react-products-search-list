import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { PriceSlider } from '../PriceSlider';

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
  dataValue,
  setDataValue,
  minPriceValue,
  setMinPriceValue,
  maxPriceValue,
  setMaxPriceValue,
}) => {
// const [token, setToken] = useLocalStorage('')

// const {nameQuery, dateQuery, priceRange} = searchParameters;

const handleTitleChange = ({ target }) => {
  setTitleValue(target.value);
  applyTitleQuery(target.value)
}

const handleDateChange = ({ target }) => {
  setDataValue(Date.parse(target.value))
}

// etDataValue(new Date(Date.parse(target.value)).toISOString())

  // const handleSubmitChange = (e) => {
  //   e.preventDefault();
  // }

  // console.log(minPriceValue, maxPriceValue);
  console.log(dataValue);

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
          onChange={handleDateChange}
        />
      </div>
      <PriceSlider
        minPriceValue={minPriceValue}
        setMinPriceValue={setMinPriceValue}
        maxPriceValue={maxPriceValue}
        setMaxPriceValue={setMaxPriceValue}
      />
    </form>
  );
};

ProducFilter.propTypes = {
  titleValue: PropTypes.string.isRequired,
  dataValue: PropTypes.number.isRequired,
  minPriceValue: PropTypes.string.isRequired,
  maxPriceValue: PropTypes.string.isRequired,

  setTitleValue: PropTypes.func.isRequired,
  applyTitleQuery: PropTypes.func.isRequired,
  setDataValue: PropTypes.func.isRequired,

  setMinPriceValue: PropTypes.func.isRequired,
  setMaxPriceValue: PropTypes.func.isRequired,
};
