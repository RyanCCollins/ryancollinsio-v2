import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import './TechnologyStack.scss';
import {
  TechStack,
  Divider
} from '../../components';

class TechnologyStack extends Component {
  render() {
    const {
      technologies
    } = this.props;
    return (
      <section className="tech-stack-section">
        <div className="tech-stack__section-header">
          <h1 className="section-header text-white">Tech Stack</h1>
          <Divider />
        </div>
        <TechStack technologies={technologies} />
      </section>
    );
  }
}

TechnologyStack.propTypes = {
  technologies: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  technologies: state.technologies
});

export default connect(
  mapStateToProps
)(TechnologyStack);
