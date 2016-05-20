import React from 'react';

export default class FlexGrid extends React.Component {
  render() {
    return (
      <div className="container">
        <section className="content">
          <div className="flex-container">
            <div className="box box-1"></div>
            <div className="box box-2"></div>
            <div className="box box-3"></div>
          </div>
        </section>
      </div>
    );
  }
}
