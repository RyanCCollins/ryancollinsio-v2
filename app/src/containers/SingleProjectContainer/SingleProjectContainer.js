import React from 'react';
import {
  SingleProject,
  LoadingIndicator,
  Divider
} from '../../components';
import './SingleProjectContainer.scss';

class SingleProjectContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: null
    };
  }
  componentDidMount() {
    const projectId = this.props.location.query;
    const project = this.props.projects.filter((item) => {
      return item.id === projectId;
    });
    this.state.project = project;
  }
  render() {
    const {
      projects
    } = this.props;
    return (
      <div className="single-project-container">
        <h1 className="section-header">{this.state.project ? this.state.project.title : ''}</h1>
        <Divider />
        {this.state.project === null ?
          <LoadingIndicator />
          :
          <SingleProject />
        }
      </div>
    );
  }
}

SingleProjectContainer.PropTypes = {
  router: React.PropTypes.func
};

export default SingleProjectContainer;
