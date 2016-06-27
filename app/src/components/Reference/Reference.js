import React from 'react';

const Reference = ({
  reference
}) => (
  <div className="reference-item">
    <div className="profile__image">
      <img
        alt={`Image of a person named ${reference.person.name}`}
        src={reference.person.image}
        className="img-circle img-thumbnail"
      />
    </div>
    <div className="reference-item__wrapper">
      <h4 className="reference__company">{reference.person.company}</h4>
      <p className="reference__text">{reference.text}</p>
      <p className="reference__source-name">
        {reference.person.name}
        <span className="reference__source-title">{reference.person.title}</span>
      </p>
    </div>
  </div>
);
