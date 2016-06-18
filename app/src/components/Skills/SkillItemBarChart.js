import React from 'react';
import { Column } from 'react-foundation';
import { Motion, spring } from 'react-motion';

class SkillItemBarChart extends React.Component {
  constructor(props) {
    super(props);
    this.setWidthStyle = this.setWidthStyle.bind(this);
    this.state = {
      leftStyle: {
        left: 0
      },
      widthStyle: {
        width: 0
      }
    };
  }
  componentDidMount() {
    this.setWidthStyle();
  }
  setWidthStyle() {
    // const barRef = this.refs.barDiv.getDOMNode();
    const barRect = {width: 555};
    const left = barRect.width * (this.props.skill.percent / 100);
    const width = left + 40;
    this.setState({
      widthStyle: {
        width: width
      },
      leftStyle: {
        left: left
      }
    });
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
            <div
              className="bar"
              ref="barDiv"
            >
              <span
                className="percent" style={this.state.leftStyle}>{skill.percent}%</span>
              <span
                ref="itemProgress"
                className="item-progress"
                data-percent={skill.percent}
                style={this.state.widthStyle}
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
