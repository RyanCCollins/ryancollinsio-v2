import React from 'react';
import {
  Divider
} from '../../../components';
import {
  Column,
  Row
} from 'react-foundation';
import './VideoSeries.scss';
import VideoSeriesImage from './video-series.jpg';

const VSImage = () => (
  <img
    className="img-responsive img-rounded"
    src={VideoSeriesImage}
    alt="Lights on set of a movie scene"
  />
);

const VideoSeries = () => (
  <div className="video-series-section">
    <div className="section-title">Video Series</div>
    <Divider />
    <Row>
      <Column
        large={8}
        medium={10}
        small={12}
        isColumn
        centerOnSmall
        className="services--video-series-wrapper"
      >
        <div className="coming-soon__paragraph-wrapper">
          <p>Coming soon, we will be releasing a video series aimed to teach cutting-edge functional JavaScript, among other topics.</p>
          <p>Stay tuned!</p>
        </div>
      </Column>
      <Column small={12} medium={10} large={4} centerOnSmall>
        <VSImage />
      </Column>
    </Row>
  </div>
);

export default VideoSeries;
