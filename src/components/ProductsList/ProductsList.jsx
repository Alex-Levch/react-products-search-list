import React, { useState } from 'react';
import { ProductCard } from '../ProductCard';
import { PageNumbers } from '../PageNumbers';

import './productsList.scss';

export const ProductsList = ({ products }) => {
  // const [products, setProducts] = useState([]);
  // const [productLimit, setProductLimit] = useState(6);
  // const [offSet, setOffSet] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(6);

  const pages = [];
  for (let i = 1; i <= Math.ceil(products.length/productsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * productsPerPage;
  const indexOfFirstItem = indexOfLastItem - productsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const changeDateFormat = (date) => {
    return date.replace(/\//g, ".");
  }

  return (
    <div className="products container">
      <ul className="products__list">
        {currentItems.map(product => (
          <li
            key={product.id}
            className="product"
          >
            <h3 className="product__title">
              {product.title}
            </h3>
            <p className="product__price product__text">
              {product.price} грн.
            </p>
            <p className="product__thumbnail product__text">
              {product.thumbnail}
            </p>
            <p className="product__thumbnail-date product__text">
              Date:
              {` ${changeDateFormat(product.date)}`}
            </p>
          </li>
        ))}
      </ul>
      <PageNumbers
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};
