import React from 'react';
import './CircleChart.scss';
import { StaggeredMotion, spring } from 'react-motion';

class CircleChart extends React.Component {
  constructor(props) {
    super(props);
    this.setItemHeight = this.setItemHeight.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      height: 0
    };
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  setItemHeight() {
    const height = 108 * (this.props.item.percent / 100);
    this.setState({
      height
    });
  }
  handleScroll(event) {
    this.setItemHeight();
  }
  render() {
    const {
      item
    } = this.props;
    return (
      <div className="item last" id={`language-item-${item.id}`}>
        <StaggeredMotion
          defaultStyles={[{ height: 0 }]}
          styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
            return i === 0 ?
              { height: spring(this.state.height) }
            :
              { height: spring(prevInterpolatedStyles[i - 1].height) }
        })}>
          {interpolatingStyles =>
            <div className="circle">
              {interpolatingStyles.map((style, i) =>
                <span
                  className="item-progress"
                  key={i}
                  style={style}
                  data-percent={item.percent}
                ></span>
            )}
            </div>
          }
        </StaggeredMotion>
        <span className="percent">{item.percent}%</span>
        <h4 className="text-center uppercase">{item.name}</h4>
      </div>
    );
  }
}

export default CircleChart;
