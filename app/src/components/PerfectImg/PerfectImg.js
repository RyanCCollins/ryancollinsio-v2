import React, { PropTypes } from 'react';
import './PerfectImg.scss';

class PerfectImg extends React.Component {
  constructor() {
    super();
    this.stripNameFromSrc = ::this.stripNameFromSrc;
  }
  stripNameFromSrc(src) {
    const srcArray = src.split('/');
    return srcArray[srcArray - 1];
  }
  render() {
    const {
      src,
      onLoad
    } = this.props;
    return (
      <figure>
        <picture className="intrinsic intrinsic--4x3">
          <source media="(min-width: 500px)" srcSet={src} />
          <img
            onLoad={onLoad}
            className="intrinsic-item"
            srcSet={src}
            alt={this.stripNameFromSrc(src)}
          />
        </picture>
      </figure>
    );
  }
}

PerfectImg.propTypes = {
  src: PropTypes.string.isRequired,
  onLoad: PropTypes.func
};

export default PerfectImg;
