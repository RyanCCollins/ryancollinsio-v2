import React from 'react';
import { Column } from 'react-foundation'
import { Motion, spring } from 'react-motion';

class SkillItemBarChart extends React.Component {
  constructor(props) {
    super(props);
    this.setWidthStyle = this.setWidthStyle.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
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
    window.addEventListener('scroll', this.handleScroll)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll(event) {
    this.setWidthStyle();
  }
  setWidthStyle() {
    // const barRef = this.refs.barDiv.getDOMNode();
    const barRect = { width: 555 };
    const left = barRect.width * (this.props.skill.percent / 100);
    const width = left + 40;
    this.setState({
      width,
      left
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
              <Motion defaultStyle={{ left: 0 }} style={{ left: spring(this.state.left) }}>
                {interpolatingStyle =>
                  <span
                    className="percent"
                    style={interpolatingStyle}
                  >
                    {skill.percent}%
                  </span>
                }
              </Motion>
              <Motion defaultStyle={{ width: 0 }} style={{ width: spring(this.state.width) }}>
                {interpolatingStyle =>
                  <span
                    ref="itemProgress"
                    className="item-progress"
                    data-percent={skill.percent}
                    style={interpolatingStyle}
                  ></span>
                }
              </Motion>
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
