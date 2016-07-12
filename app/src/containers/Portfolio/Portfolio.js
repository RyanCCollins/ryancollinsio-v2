import React, { Component, PropTypes } from 'react';
import PortfolioGrid from '../../components/Portfolio/PortfolioGrid';
import { Divider, LoadingIndicator } from '../../components';
import { CategoryFilterContainer } from 'containers';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectProjectCategory } from 'actions/actionCreators';

const Styles = {
  hidden: {
    display: 'none'
  },
  notHidden: {
    display: ''
  }
};

const filterProjects = (projects, category) =>
  category.value === 'all' ?
    projects
  :
    projects.filter(project =>
      project.category.toLowerCase() === category.value
    );

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.handleEndLoad = this.handleEndLoad.bind(this);
    this.setLoading = this.setLoading.bind(this);
    this.setNotLoading = this.setNotLoading.bind(this);
    const { projects, selectedCategory } = this.props;
    this.state = {
      isLoading: false,
      selectedCategory,
      filteredProjects: filterProjects(projects, selectedCategory)
    };
  }
  componentDidMount() {
    const {
      isLoading
    } = this.state;
    if (!isLoading) {
      setTimeout(this.setLoading(), 200);
    }
  }
  setLoading() {
    this.setState({ isLoading: true });
  }
  setNotLoading() {
    this.setState({ isLoading: false });
  }
  handleEndLoad() {
    setTimeout(this.setNotLoading(), 1000);
  }
  render() {
    const {
      isLoading,
      filteredProjects
    } = this.state;
    const {
      onSelectCategory,
      selectedCategory,
      categories
    } = this.props;
    return (
      <div>
        <LoadingIndicator isLoading={isLoading} />
        <div className="portfolio-container" style={isLoading ? Styles.hidden : Styles.notHidden}>
          <h1 className="section-header text-grey portfolio__section-header">Portfolio</h1>
          <Divider />
          <CategoryFilterContainer
            categories={categories}
            onSelectCategory={onSelectCategory}
            selectedCategory={selectedCategory}
          />
          <PortfolioGrid
            {...this.props}
            projects={filteredProjects}
            onLoad={this.handleEndLoad}
          />
        </div>
      </div>
    );
  }
}

Portfolio.propTypes = {
  projects: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  onSelectCategory: PropTypes.func.isRequired,
  selectedCategory: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  projects: state.portfolio.projects,
  categories: state.portfolio.categories,
  selectedCategory: state.portfolio.selectedCategory
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    onSelectCategory: (category) => selectProjectCategory(category)
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Portfolio);
