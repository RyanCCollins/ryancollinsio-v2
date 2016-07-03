import React, { Component, PropTypes } from 'react';
import './ResumeItem.scss';

const title = (a) =>
  `${a.school} - ${a.title}`;

const Styles = {
  noHeight: {
    height: 0
  },
  hidden: {
    display: 'none'
  }
};

class ResumeItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: this.props.index !== 0
    };
    this.handleCollapse = this.handleCollapse.bind(this);
  }
  handleCollapse() {
    const { isCollapsed } = this.state;
    this.setState({
      isCollapsed: !isCollapsed
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
        <div className="resume-btn">
          <a
            onClick={this.handleCollapse}
            className={isCollapsed ? 'collapsed' : 'expanded'}
          />
        </div>
        <div className="panel description-text">
          <div className="panel-heading">
            <div className="panel-title">
              <h4 className="resume-title">{title(degree)}</h4>
              <a href={degree.certificateUrl || ''}>
                {degree.certificateUrl ? 'Download Certificate' : ''}
              </a>
            </div>
          </div>
          <div
            id={`degree-${degree.id}`}
            className={`panel-collapse collapse ${isCollapsed ? '' : 'in'}`}
            style={isCollapsed ? Styles.noHeight : {}}
          >
            <div className="panel-body">
              <p style={isCollapsed ? Styles.hidden : {}}>{degree.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ResumeItem.propTypes = {
  index: PropTypes.number,
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
