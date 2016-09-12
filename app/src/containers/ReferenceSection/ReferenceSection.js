import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Reference, Slider, Divider } from '../../components';
import './ReferenceSection.scss';

// TODO: move to components
const ReferenceSection = ({
  references
}) => (
  <section className="reference-section">
    <h1 className="section-header">References</h1>
    <Divider />
    <Slider>
      {references.map((ref, i) =>
        <div key={i}>
          <Reference
            reference={ref}
          />
        </div>
      )}
    </Slider>
    <div className="owl-buttons">
      <div className="owl-prev">
        <i className="fa fa-angle-left"></i>
      </div>
      <div className="owl-next">
        <i className="fa fa-angle-right"></i>
      </div>
    </div>
  </section>
);

ReferenceSection.propTypes = {
  references: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  references: state.references
});

export default connect(mapStateToProps)(ReferenceSection);
