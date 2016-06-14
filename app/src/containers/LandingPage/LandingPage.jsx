import React from 'react';
import Intro from '../../components/Intro/Intro';
import './LandingPage.scss'

const LandingPage = props => (
  <div className="landing-page">
    <Intro {...props}/>
  </div>
);


export default LandingPage;
