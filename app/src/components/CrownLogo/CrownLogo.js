import CrownLogoImage from '../../../images/crown.png';
import React from 'react';
import './CrownLogo.scss';

const CrownLogo = () => (
  <div className="crown-logo">
    <img
      className="crown-logo__image"
      src={CrownLogoImage}
      alt="Crown Logo"
    />
    <span>
      <h1 className="crown-logo__title">
        ryancollins.io
      </h1>
    </span>
  </div>
);

export default CrownLogo;
