import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'

import './pageNumbers.scss';

export const PageNumbers = ({
  pages,
  setCurrentPage,
  currentPage,
}) => {

  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const handleChangePage = ({ target }) => {
    setCurrentPage(Number(target.id))
  }

  const increase = () => {
    setCurrentPage(prevState => prevState + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit)
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit)
    }
  }

  const decrease = () => {
    setCurrentPage(prevState => prevState - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit)
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit)
    }
  }

  // (number < maxPageNumberLimit + 1 && number > minPageNumberLimit)

  return (

    <div
      className="pages"
    >
      <button
        type="button"
        className="pages__button pages__button-decrease"
        onClick={decrease}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <ul
        className="pages__list"
      >
        {pages.map(number => {
          if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
            return (
              <li
                key={number}
                id={number}
                className={classNames('pages__item', {
                  pages__item_active: currentPage === number,
                })}
                onClick={handleChangePage}
              >
                {number}
              </li>
            )
          } else {
            return null;
          }
        })}
      </ul>
      <button
        type="button"
        className="pages__button pages__button-increase"
        onClick={increase}
        disabled={currentPage === pages.length}
      >
        Next
      </button>
    </div>
  );
};

PageNumbers.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.number.isRequired,
  ).isRequired,

  currentPage: PropTypes.number.isRequired,

  setCurrentPage: PropTypes.func.isRequired,
}


