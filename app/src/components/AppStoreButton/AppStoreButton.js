import React from 'react';
import './AppStoreButton.scss';
import AppStore from './app-store.png';
import { Thumbnail } from 'react-foundation';

const AppStoreButton = ({
  url
}) => (
  <a className="app-store-button" href={url}>
    <Thumbnail
      className="app-store-button-image"
      src={AppStore}
      alt="App Store Button"
    />
  </a>
);

export default AppStoreButton;
