import React, { PropTypes } from 'react';
import ChevronDown from 'react-icons/lib/fa/chevron-down';
import { Link as ScrollTo } from 'react-scroll';

const DownChevron = ({
  scrollToSection
}) => (
  <div className="intro-header__chevron">
    <ScrollTo
      to={scrollToSection}
      spy
      smooth
      offset={50}
      duration={800}
    >
      <ChevronDown className="intro-header__chevron-down" />
    </ScrollTo>
  </div>
);

DownChevron.propTypes = {
  scrollToSection: PropTypes.string.isRequired
};

export default DownChevron;
