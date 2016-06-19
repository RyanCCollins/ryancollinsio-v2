import React from 'react';
import Spinner from 'react-spinkit';
import './LoadingIndicator.scss';

const LoadingIndicator = () => (
  <div className="loading-indicator-container">
    <div id="overlay"></div>
    <div className="loading-indicator">
      <Spinner
        spinnerName='cube-grid'
      />
    </div>
  </div>
);

export default LoadingIndicator;
