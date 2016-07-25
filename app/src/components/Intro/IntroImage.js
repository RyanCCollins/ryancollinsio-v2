import React from 'react';
import CrownLogoImage from '../../../images/crown.png';
import ReactLogoSrc from './react-logo.png';

const ReactLogo = () => (
  <img
    style={{ height: 80, width: 80 }}
    src={ReactLogoSrc}
    alt="React Logo"
    className="wicked-cool-react-logo"
  />
);

const CrownLogo = () => (
  <img
    alt="A crown logo"
    src={CrownLogoImage}
    className="intro-image"
  />
);

const IntroImage = () => (
  <div className="logo-wrap">
    <CrownLogo />
    <div className="logo-text-wrap">
      <ReactLogo />
      {/*<h1 className="logo-text">RC</h1>*/}
    </div>
  </div>
);

export default IntroImage;
