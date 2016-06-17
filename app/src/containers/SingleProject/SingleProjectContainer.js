import React from 'react';
import { SingleProject } from '../../components';
import './SingleProjectContainer.scss';

class SingleProjectContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log("Did Mount");
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
