import React from 'react';
import { Link } from 'react-router';

const Main = (props) => (
  <div>
    <h1>
      <Link to="/">Welcome to Ryancollins.io</Link>
    </h1>
    {React.cloneElement(props.children, props)}
  </div>
);

export default Main;
