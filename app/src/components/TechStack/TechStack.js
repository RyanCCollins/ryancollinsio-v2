import React from 'react';
import styles from './TechStack.scss';

const TechStack = ({
  technologies
}) => (
  <section>
    <div className={styles.wrapper}>
      <div className={styles.stackItem}></div>
    </div>
  </section>
);

export default TechStack;
