import React from 'react';
import Electron from './Electron';
import ReactLogo from './ReactLogo';
import CrownLogo from './CrownLogo';

const IntroImage = () => (
  <div className="logo-wrap">
    <CrownLogo />
    <div className="logo-text-wrap">
      <Electron />
      <ReactLogo />
    </div>
  </div>
);

export default IntroImage;
