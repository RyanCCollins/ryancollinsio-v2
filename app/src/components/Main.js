import React from 'react';
import Navbar from './Navbar/Navbar';

const Main = (props) => (
  <div className="body__wrapper">
    <Navbar />
    {React.cloneElement(props.children, props)}
  </div>
);

export default Main;
