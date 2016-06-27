import React from 'react';

const Reference = ({
  referenceData
}) => (
  <div className="reference-item">
    <div className="profile__image">
      <img
        alt={`Image of a person named ${referenceData.person.name}`}
        src={referenceData.person.image}
        className="img-circle img-thumbnail"
      />
    </div>
    <div className="reference-item__wrapper">
      <h4 className="reference__company">{referenceData.person.company}</h4>
      <p className="reference__text">{referenceData.text}</p>
      <p className="reference__source-name">
        {referenceData.person.name}
        <span className="reference__source-title">{referenceData.person.title}</span>
      </p>
    </div>
  </div>
);
