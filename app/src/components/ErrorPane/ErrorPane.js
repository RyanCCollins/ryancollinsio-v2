import React, { PropTypes } from 'react';
import { Callout } from 'react-foundation';
import { MdWarning } from 'react-icons/lib/md';

const Styles = {
  hidden: {
    display: 'none'
  },
  notHidden: {
    display: ''
  }
};

const ErrorPanel = ({
  errors,
  isVisible
}) => (
  <Callout
    color={'alert'}
    size={'large'}
    className="error-panel"
    style={isVisible ? Styles.hidden : Styles.notHidden}
  >
    <MdWarning />
    <h4 className="callout-title">Errors</h4>
    <ul className="no-bullet">
      {errors != null && errors.length > 0 &&
        errors.map((err) =>
          <li>{err}</li>
        )}
    </ul>
  </Callout>
);

ErrorPanel.propTypes = {
  errors: PropTypes.array.isRequired,
  isVisible: PropTypes.bool.isRequired
};

ErrorPanel.defaultProps = {
  isVisible: false
};

export default ErrorPanel;
