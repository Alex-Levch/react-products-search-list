import React from 'react';
import PropTypes from 'prop-types';

import './priceSlider.scss';

export const PriceSlider = ({
  minPriceValue,
  setMinPriceValue,
  maxPriceValue,
  setMaxPriceValue,
}) => {

  console.log(minPriceValue, maxPriceValue);

  const handleMinPriceChange = ({ target }) => {
    setMinPriceValue(target.value)
  }

  const handleMaxPriceChange = ({ target }) => {
    setMaxPriceValue(target.value)
  }


  const inputLeft = document.getElementById("range-field-left");
  const inputRight = document.getElementById("range-field-right");

  const thumbLeft = document.querySelector(".slider__thumb-left");
  const thumbRight = document.querySelector(".slider__thumb-right");
  const range = document.querySelector(".slider__range");

const setLeftValue = () => {
  const _this = inputLeft,
    min = parseInt(_this.min),
    max = parseInt(_this.max);

  _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);

  const percent = ((_this.value - min) / (max - min)) * 100;

  thumbLeft.style.left = `${percent }%`;
  range.style.left = `${percent}%`;
};

const setRightValue = () => {
  const _this = inputRight,
    min = parseInt(_this.min),
    max = parseInt(_this.max);

  _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);

  const percent = ((_this.value - min) / (max - min)) * 100;

  thumbRight.style.right = `${100 - percent }%`;
  range.style.right = `${100 - percent}%`;
};

const mouseOverLeft = () => {
  thumbLeft.classList.add("hover");
};

const mouseOutLeft = () => {
  thumbLeft.classList.remove("hover");
};

const mouseDownLeft = () => {
  thumbLeft.classList.add("active");
};

const mouseUpLeft = () => {
  thumbLeft.classList.remove("active");
};

const mouseOverRight = () => {
  thumbRight.classList.add("hover");
};

const mouseOutRight = () => {
  thumbRight.classList.remove("hover");
};

const mouseDownRight = () => {
  thumbRight.classList.add("active");
};

const mouseUpRight = () => {
  thumbRight.classList.remove("active");
};

  return (
    <div className="middle price-container">
        <p className="priceValues">
          <span className="priceValues__label">
            From:
          </span>
          <span
            className="priceValues__value"
          >
            {minPriceValue}
          </span>
          <span className="priceValues__label">
            To:
          </span>
          <span
            className="priceValues__value"
          >
            {maxPriceValue}
          </span>
        </p>
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
    </div>
  );
};

PriceSlider.propTypes = {
  minPriceValue: PropTypes.string.isRequired,
  maxPriceValue: PropTypes.string.isRequired,

  setMinPriceValue: PropTypes.func.isRequired,
  setMaxPriceValue: PropTypes.func.isRequired,
};

