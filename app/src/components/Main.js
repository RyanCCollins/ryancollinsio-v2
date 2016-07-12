import React from 'react';
import Navbar from './Navbar/Navbar';

const Main = (props) => (
  <div>
    <Navbar />
    {React.cloneElement(props.children, props)}
  </div>
);

Main.propTypes = {
  children: React.PropTypes.element
};

export default Main;
