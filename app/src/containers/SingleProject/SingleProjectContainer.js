import React from 'react';
import { SingleProject } from '../../components';
import './SingleProjectContainer.scss';

class SingleProjectContainer extends React.Component {
  constructor(props) {
    super(props);
    const projectKey = this.props.location.query;
    console.log(projectKey);
  }
  render() {
    return (
      <div className="single-project-container">
        <SingleProject />
      </div>
    );
  }
}

SingleProjectContainer.PropTypes = {
  router: React.PropTypes.func
};

export default SingleProjectContainer;
