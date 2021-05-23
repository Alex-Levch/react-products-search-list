import React, { useState, useEffect, useMemo } from 'react';
import { getProducts, BASE_URL } from './components/api/api';
import productsFromServer from './components/api/products.json';
import { Form } from './components/Form';
import { ProducFilter } from './components/ProductFilter';
import { ProductList } from './components/ProductsList';


import './App.scss';
import { ProductsList } from './components/ProductsList/ProductsList';

const debounce = (f, delay) => {
  let timerId;
  return (...args) => {
    clearTimeout(timerId)
    timerId = setTimeout(f, delay, ...args);
  };
};

export const App = () => {
  const [products, setProducts] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogined, setIsLogined] = useState(false);
  const [errorMessage, setErrorMessage] = useState(true);
  const [titleValue, setTitleValue] = useState('');
  const [appliedQuery, setAppliedQuery] = useState('');
  // const [dataValue, setDataValue] = useState('');
  const [minPriceValue, setMinPriceValue] = useState('120');
  const [maxPriceValue, setMaxPriceValue] = useState('370');

  useEffect(() => {
    setProducts([...productsFromServer])
  }, []);

  // useEffect(() => {
    // loadProductsFromServer();
  // }, []);

  // const visibleProducts = useMemo(() => products.filter((product) => {
  //   const { titleValue, priceValue, dataValue } = activeSearchParameters;
  //   const { title, price, date} = product;
  // }), [])

  const applyTitleQuery = debounce(setAppliedQuery, 1000);
  // const applyPriceQuery = debounce(setPriceValue, 1000);

  const titleFilter = product => (
    product.title === null
      ? product.title
      : (product.title.toLocaleLowerCase())
        .includes(appliedQuery.toLocaleLowerCase())
  );

  const priceFilter = product => (
    product.price > +priceValue
    ? true
    : false
  );

  const filteredByTitleProducts = useMemo(() => {
    return products
    .filter(titleFilter);
  }, [appliedQuery])

  // const filteredByPriceProducts = useMemo(() => {

  //   if (filteredByTitleProducts.length) {
  //     return filteredByTitleProducts
  //     .filter(priceFilter)
  //   }

  //   return products
  //     .filter(priceFilter)
  // }, [priceValue])

  return (
  <div className="app">
    {!isLogined && (
      <Form
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        errorMessage={errorMessage}
        setIsLogined={setIsLogined}
        isLogined={isLogined}
      />
    )}
    <ProducFilter
      setTitleValue={setTitleValue}
      titleValue={titleValue}
      applyTitleQuery={applyTitleQuery}
      minPriceValue={minPriceValue}
      setMinPriceValue={setMinPriceValue}
      maxPriceValue={maxPriceValue}
      setMaxPriceValue={setMaxPriceValue}
    />
    <ProductsList
      products={filteredByTitleProducts.length ? filteredByTitleProducts : products}
    />
  </div>
  );
};



