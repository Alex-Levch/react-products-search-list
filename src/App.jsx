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
  const [priceValue, setPriceValue] = useState('');
  // const [dataValue, setDataValue] = useState('');

  useEffect(() => {
    setProducts([...productsFromServer])
  }, []);

  // useEffect(() => {
    // loadProductsFromServer();
  // }, []);

  const visibleProducts = useMemo(() => products.filter((product) => {
    const { titleValue, priceValue, dataValue } = activeSearchParameters;
    const { title, price, date} = product;
  }), [])

  const applyTitleQuery = debounce(setAppliedQuery, 1000);

  console.log(appliedQuery);

  const titleFilter = product => (
    product.title === null
      ? product.title
      : (product.title.toLocaleLowerCase())
        .includes(appliedQuery.toLocaleLowerCase())
  );

  const filteredByTitleProducts = useMemo(() => {
    return products
    .filter(titleFilter);
  }, [appliedQuery])

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
      setPriceValue={setPriceValue}
      priceValue={priceValue}
    />
    <ProductsList
      products={filteredByTitleProducts.length ? filteredByTitleProducts : products}
    />
  </div>
  );
};



