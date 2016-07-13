import React, { PropTypes } from 'react';
import {
  SingleProject,
  LoadingIndicator
} from '../../components';
import { connect } from 'react-redux';
import './SingleProjectContainer.scss';

class SingleProjectContainer extends React.Component {
  constructor(props) {
    super(props);
    this.setProject = this.setProject.bind(this);
    this.state = {
      selectedProject: null
    };
  }
  componentDidMount() {
    const {
      params,
      projects
    } = this.props;
    const projectId = params.projectId;
    const filteredProjects = projects.filter((item) =>
      item.id == projectId
    );
    this.setProject(filteredProjects[0]);
  }
  setProject(project) {
    console.log(`Setting selected project: ${project}`);
    this.setState({ selectedProject: project });
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

SingleProjectContainer.propTypes = {
  projects: PropTypes.array.isRequired,
  params: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  projects: state.portfolio.projects
});

export default connect(mapStateToProps)(SingleProjectContainer);
