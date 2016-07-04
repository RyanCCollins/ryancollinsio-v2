import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Reference, Slider, Divider } from 'components';
import './ReferenceSection.scss';

const ReferenceSection = ({
  references
}) => (
  <section className="reference-section">
    <h1 className="section-header">References</h1>
    <Divider />
    <Slider>
      {references.map((ref, i) =>
        <div>
          <Reference
            key={i}
            reference={ref}
          />
        </div>
      )}
    </Slider>
  </section>
);

ReferenceSection.propTypes = {
  references: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  references: state.references
});

export default connect(mapStateToProps)(ReferenceSection);
