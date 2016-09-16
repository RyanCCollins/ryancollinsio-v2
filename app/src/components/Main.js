import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';

class Main extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}

Main.propTypes = {
  children: React.PropTypes.element
};

export default Main;
