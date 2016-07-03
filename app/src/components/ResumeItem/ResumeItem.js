import React, { Component, PropTypes } from 'react';
import './ResumeItem.scss';

const title = (a) =>
  `${a.school} - ${a.title}`;

class ResumeItem extends Component {
  constructor() {
    super();
    this.state = {
      isCollapsed: true
    };
    this.handleCollapse = this.handleCollapse.bind(this);
  }
  handleCollapse() {
    const { isCollapsed } = this.state;
    this.setState({
      isCollapsed
    });
  }
  render() {
    const { isCollapsed } = this.state;
    const { degree } = this.props;
    return (
      <div className="resume-item" key={degree.id}>
        <div className="resume-year">
          <span className="resume-year">{`${degree.dates.from} - ${degree.dates.to}`}</span>
        </div>
        <a
          onClick={this.handleCollapse}
          className={isCollapsed ? 'collapsed' : 'expanded'}
        >
          <div className="resume-button" />
        </a>
        <div className="panel">
          <div className="panel-heading">
            <div className="panel-title">
              <h4 className="resume-title">{title(degree)}</h4>
            </div>
          </div>
          <div
            id={`degree-${degree.id}`}
            className={`panel panel-collapse collapse ${isCollapsed ? '' : 'in'}`}
          >
            <div className="panel-body">
              <p>{degree.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ResumeItem.propTypes = {
  degree: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    dates: PropTypes.shape({
      from: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired
    }).isRequired,
    certificateUrl: PropTypes.string,
    description: PropTypes.string.isRequired
  }).isRequired
};

export default ResumeItem;
