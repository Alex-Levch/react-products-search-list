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

  // const handleSubmitChange = (e) => {
  //   e.preventDefault();
  // }

  console.log(minPriceValue, maxPriceValue);

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
      <PriceSlider
        minPriceValue={minPriceValue}
        setMinPriceValue={setMinPriceValue}
        maxPriceValue={maxPriceValue}
        setMaxPriceValue={setMaxPriceValue}
      />
      {/* <div className="middle">
        <div className="middle__multi-slider">
          <input
            value={minPriceValue}
            min="0"
            max="500"
            type="range"
            className="middle__min-value middle__range"
            id="range-field-left"
            onChange={handleMinPriceChange}
            onInput={setLeftValue}
            onMouseOver={mouseOverLeft}
            onMouseOut={mouseOutLeft}
            onMouseDown={mouseDownLeft}
            onMouseUp={mouseUpLeft}
          />
          <input
            value={maxPriceValue}
            min="0"
            max="500"
            type="range"
            className="middle__max-value middle__range"
            id="range-field-right"
            onChange={handleMaxPriceChange}
            onInput={setRightValue}
            onMouseOver={mouseOverRight}
            onMouseOut={mouseOutRight}
            onMouseDown={mouseDownRight}
            onMouseUp={mouseUpRight}
          />
        </div>

        <div className="slider">
          <div className="slider__track"></div>
          <div className="slider__range"></div>
          <div className="slider__thumb slider__thumb-left">
            <div className="slider__thumb-circle"></div>
          </div>
          <div className="slider__thumb slider__thumb-right">
            <div className="slider__thumb-circle"></div>
          </div>
        </div>
      </div> */}
    </form>
  );
};

ProducFilter.propTypes = {
  titleValue: PropTypes.string.isRequired,
  minPriceValue: PropTypes.string.isRequired,
  maxPriceValue: PropTypes.string.isRequired,

  setTitleValue: PropTypes.func.isRequired,
  applyTitleQuery: PropTypes.func.isRequired,

  setMinPriceValue: PropTypes.func.isRequired,
  setMaxPriceValue: PropTypes.func.isRequired,
};
