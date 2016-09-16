import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';

class Main extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {typeof this.props !== undefined ?
          React.cloneElement(this.props.children, this.props) : null}
      </div>
    );
  }
}

Main.propTypes = {
  children: React.PropTypes.element
};

export default Main;
