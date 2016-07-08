import React from 'react';
import {
  Divider
} from 'components';
import {
  Column,
  Row
} from 'react-foundation';
import './VideoSeries.scss';

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
        <div className="coming-soon">
          <p>Coming soon, we will be releasing a video series aimed to teach cutting-edge functional JavaScript, among other topics.</p>
          <p>Stay tuned!</p>
        </div>
      </Column>
    </Row>
  </div>
);

export default VideoSeries;
