import React, { PropTypes } from 'react';
import connect from 'react-redux';
import { Reference } from 'components';
import './ReferenceSection.scss';

const ReferenceSection = ({
  references
}) => (
  <section className="reference-section">
    <h1 className="section-header">References</h1>
    {references.map((ref, i) =>
      <Reference
        key={i}
        reference={ref}
      />
    )}
  </section>
);

ReferenceSection.propTypes = {
  references: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  references: state.references
});

export default connect(mapStateToProps)(ReferenceSection);
