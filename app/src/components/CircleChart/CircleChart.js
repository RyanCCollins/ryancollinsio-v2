import React from 'react';
import './CircleChart.scss';

class CircleChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      circleStyle: {
        height: 0
      }
    };
    this.getItemHeight = this.getItemHeight.bind(this);
  }
  componentDidMount() {
    this.getItemHeight();
  }
  getItemHeight() {
    const height = 108 * (this.props.item.percent / 100);
    this.setState({
      circleStyle: {
        height: height
      }
    });
  }
  render() {
    const {
      item
    } = this.props;
    return (
      <div className="item last" id={`language-item-${item.id}`}>
        <div className="circle">
          <span
            className="item-progress"
            style={this.state.circleStyle}
            data-percent={item.percent}
          ></span>
        </div>
        <span className="percent">{item.percent}%</span>
        <h4 className="text-center uppercase">{item.name}</h4>
      </div>
    );
  }
}

export default CircleChart;
