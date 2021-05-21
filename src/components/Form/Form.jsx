import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { sendDataToServer, getProductsFromServer } from '../api/api';

import './form.scss';

export const Form = ({
  email,
  password,
  setEmail,
  setPassword,
  setIsLogined,   /// for sendDataToServer const func = async () => {}
  errorMessage,
}) => {

  const sendData = async () => {
    const response = sendDataToServer(email, password);
    setIsLogined(response);
  }

  const handleSubmitForm = useCallback((e) => {
    e.preventDefault();
    sendData();
  }, [email, password]);

  return (
    <form
      action=""
      className="form"
      onSubmit={handleSubmitForm}
    >
      <div className="form__login">
        <input
          type="text"
          className="form__login-field"
          value={email}
          placeholder="Enter login *"
          required
          onChange={({ target }) => {
            setEmail(target.value)
          }}
        />
      </div>
      <div className="form__password">
        <input
          type="password"
          className="form__password-field"
          value={password}
          placeholder="Enter password *"
          required
          onChange={({ target }) => {
            setPassword(target.value)
          }}
        />
      </div>
      <button
        type="submit"
        className="form__button"
      >
        Enter
      </button>
      <button
        type="button"
        onClick={() => {
          getProductsFromServer(1)
        }}
      >
        Show products data
      </button>
    </form>
  );
};

Form.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  errorMessage: PropTypes.bool.isRequired,

  setEmail: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
};
