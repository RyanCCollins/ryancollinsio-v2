import React from 'react';
import './NotFound.scss';
import { Divider } from '../../components';

const headerText = "Oops,";
const subheaderText = "Something went wrong";
const paragraphText = "It looks like you tried to go to a page that does not exist.  If you think this is an error, please contact me.";
const contactButtonText = "Contact Me";
const NotFound = () => (
  <div className="not-found-container gradient-green">
    <h1 className="section-header not-found-section__header">{headerText}</h1>
    <h4 className="section-sub-title not-found-section__subheader">{subheaderText}</h4>
    <Divider />
    <p
      className="not-found-section__paragraph-text"
    >
      {paragraphText}
    </p>
    <div className="button primary large wobble-button">{contactButtonText}</div>
  </div>
);

export default NotFound;
