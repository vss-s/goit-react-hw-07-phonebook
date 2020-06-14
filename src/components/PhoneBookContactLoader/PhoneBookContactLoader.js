import React from 'react';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';
import Style from './PhoneBookContactLoader.module.css';

const PhoneBookContactLoader = ({ isLoading }) => {
  return isLoading ? (
    <div className={Style.container}>
      <Loader
        className={Style.loader}
        type="Grid"
        color="#3645ab"
        height={80}
        width={80}
      />
    </div>
  ) : null;
};

PhoneBookContactLoader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default PhoneBookContactLoader;
