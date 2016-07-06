import React from 'react';
import {
  SingleProject,
  LoadingIndicator
} from '../../components';
import './SingleProjectContainer.scss';

class SingleProjectContainer extends React.Component {
  constructor(props) {
    super(props);
    const projects = props.projects;
    this.state = {
      projects,
      selectedProject: null
    };
  }
  componentDidMount() {
    const projectId = this.props.params.projectId;
    let filteredProjects = this.state.projects.filter((item) => {
      return item.id == projectId;
    });
    this.setState({
      selectedProject: filteredProjects[0]
    });
  }
  render() {
    return (
      <div className="single-project-container">
        {this.state.selectedProject === null ?
          <LoadingIndicator />
          :
          <SingleProject
            {...this.props}
            project={this.state.selectedProject}
          />
        }
      </div>
    );
  }
}

export default SingleProjectContainer;
