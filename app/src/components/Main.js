import React from 'react';
import { Link } from 'react-router';
import Navbar from './Navbar/Navbar'

const Main = (props) => (
  <div>
    {React.cloneElement(props.children, props)}
  </div>
);

export default Main;
