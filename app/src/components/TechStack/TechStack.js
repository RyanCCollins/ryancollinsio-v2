import React from 'react';
import './TechStack.scss';

const TechStackItem = ({
  item
}) => (
  <div className="tech-stack__item">
    {item.name}
  </div>
);

const TechStack = ({
  technologies
}) => (
  <section>
    <div className="tech-stack__wrapper">
      {technologies.map(item =>
        <TechStackItem key={item.id} item={item} />
      )}
    </div>
  </section>
);

TechStack.propTypes = {
  technologies: PropTypes.array.isRequired,
};

export default TechStack;
