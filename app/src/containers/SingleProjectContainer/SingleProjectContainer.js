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
    const projects = props.projects;
    this.state = {
      projects,
      selected: null
    };
  }
  componentDidMount() {
    const projectId = this.props.location.query;
    const project = this.state.projects.filter((item) => {
      return item.id === projectId;
    });
    this.state.selected = project;
  }
  render() {
    return (
      <div className="single-project-container">
        <h1 className="section-header">{this.state.selected ? this.state.selected.title : ''}</h1>
        <Divider />
        {this.state.selected === null ?
          <LoadingIndicator />
          :
          <SingleProject />
        }
      </div>
    );
  }
}

SingleProjectContainer.propTypes = {
  router: React.PropTypes.func
};

export default SingleProjectContainer;
