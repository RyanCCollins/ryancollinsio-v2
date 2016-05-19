import React from 'react';

export default class FlexGrid extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="left-nav">
          <div className="flex-container">
            <div className="box"><h1>About</h1></div>
            <div className="box"><h1>Work</h1></div>
            <div className="box"><h1>Blog & Tutorials</h1></div>
            <div className="box"><h1>Contact</h1></div>
          </div>
        </div>
        <section className="content"></section>
      </div>
    );
  }
}
