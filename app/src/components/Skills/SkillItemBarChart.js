import React from 'react';
import { Column, Row } from 'react-foundation';

class SkillItemBarChart extends React.Component {
  constructor(props) {
    super(props);
    const widthStyle = {
      width: props.skill.percent
    };
    const leftStyle = {
      left: props.skill.percent
    };
    this.state = {
      left: leftStyle,
      width: widthStyle,
      isAnimating: true
    };
  }
  render() {
    const {
      skill
    } = this.props;
    return (
      <Column large={6} small={12} isColumn>
        <div className="bar-chart">
          <div className="item">
            <h4 className="uppercase">{skill.name}</h4>
            <div className="bar">
              <span className="percent" style={this.state.left}>{skill.percent}</span>
              <span
                className="item-progress"
                data-percent={skill.percent}
                style={this.state.width}
              ></span>
            </div>
          </div>
        </div>
      </Column>
    );
  }
}

SkillItemBarChart.propTypes = {
  skill: React.PropTypes.object.isRequired
};

export default SkillItemBarChart;
