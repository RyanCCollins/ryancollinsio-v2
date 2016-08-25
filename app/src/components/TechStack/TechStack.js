import React, { PropTypes } from 'react';
import './TechStack.scss';

const TechStackItem = ({
  item
}) => (
  <div
    className={item.id % 2 === 0 ?
      'tech-stack__item'
    :
      'tech-stack__item tech-stack__item--odd-item'
    }
  >
    <div className="tech-stack__item--image-wrapper">
      <img className="tech-stack__item--image img-responsive" src={item.image} />
    </div>
    <div className="tech-stack__item--title-wrapper">
      <h1 className="tech-stack__item--title">{item.title}</h1>
    </div>
    <div className="tech-stack__item--overlay">
      <div className="tech-stack__item--overlay-content">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <p>{item.moreInfo}</p>
      </div>
    </div>
  </div>
);

const reversed = (items) =>
  items.reverse();

const TechStack = ({
  technologies
}) => (
  <section>
    <div className="tech-stack__wrapper">
      <div className="tech-stack__items--wrapper">
        {typeof technologies !== undefined &&
          reversed(technologies).map(item =>
            <TechStackItem
              key={item.id}
              item={item}
            />
        )}
      </div>
    </div>
  </section>
);

TechStack.propTypes = {
  technologies: PropTypes.array.isRequired
};

export default TechStack;
