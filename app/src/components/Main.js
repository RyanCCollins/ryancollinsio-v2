import React from 'react';
import { Link } from 'react-router';

const Main = () => (
  <div>
    <h1>
      <Link to="/">Welcome to Ryancollins.io</Link>
    </h1>
    {React.cloneElement(this.props.children, this.props)}
  </div>
);

export default Main;
