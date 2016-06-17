import React from 'react';
import Navbar from './Navbar/Navbar';

const Main = (props) => (
  <div>
    <Navbar />
    {React.cloneElement(props.children, props)}
  </div>
);

export default Main;
