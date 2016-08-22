import React from 'react';
import './BlurUpImage.scss';

class BlurUpImage extends React.Component {
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
      src
    } = this.props;
    return (
      <figure>
        <picture className="intrinsic intrinsic--4x3">
          <source media="(min-width: 500px)" srcSet={src} />
          <img className="intrinsic-item" srcSet={src} alt={this.stripNameFromSrc(src)} />
        </picture>
      </figure>
    );
  }
}

export default BlurUpImage;
