import React from 'react';
import { Column } from 'react-foundation';
import { Motion, spring } from 'react-motion';
import elementInViewport from '../../../lib/isVisible';

class SkillItemBarChart extends React.Component {
  constructor(props) {
    super(props);
    this.setWidthStyle = this.setWidthStyle.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.state = {
      left: 0,
      width: 0,
      needsAnimation: true
    };
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
  }
  setWidthStyle(w) {
    // const barRef = this.refs.barDiv.getDOMNode();
    const barRect = { width: w };
    const left = barRect.width * (this.props.skill.percent / 100);
    const width = left + 40;
    this.setState({
      width,
      left
    });
  }
  handleScroll() {
    const element = document.getElementById('item');
    if (elementInViewport(element)) {
      if (this.state.needsAnimation === true) {
        const width = element.offsetWidth;
        this.setWidthStyle(width || 555);
        this.setState({
          needsAnimation: false
        });
      }
    }
  }
  handleResize() {
    const element = document.getElementById('item');
    const width = element.offsetWidth;
    console.log(`width: ${width} element: ${element}`)
    this.setWidthStyle(width);
  }
  render() {
    const {
      skill
    } = this.props;
    return (
      <Column large={6} small={12} isColumn>
        <div className="bar-chart">
          <div className="item" id="item">
            <h4 className="uppercase  text-white">{skill.name}</h4>
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
