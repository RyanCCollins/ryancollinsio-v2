import React, { Component, PropTypes } from 'react';
import PortfolioGrid from '../../components/Portfolio/PortfolioGrid';
import {
  Divider,
  LoadingIndicator,
  ExpandingSearch
} from '../../components';
import { CategoryFilterContainer } from 'containers';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  selectProjectCategory,
  setPortfolioSearch,
  clearPortfolioSearch
} from 'actions/actionCreators';

const filterProjects = (
  projects,
  category
) =>
  category.value == 'all' ?
    projects
  :
    projects.filter(project =>
      project.category === category.value
    );

const search = (text, projects) =>
  projects.filter((item) => item.title.includes(text));

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.handleEndLoad = this.handleEndLoad.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClearSearch = this.handleClearSearch.bind(this);
    this.handleSelectCategory = this.handleSelectCategory.bind(this);
    this.handleFakeLoading = this.handleFakeLoading.bind(this);
    const {
      selectedCategory,
      searchTerm
    } = this.props;
    this.state = {
      isLoading: true,
      selectedCategory,
      searchTerm
    };
  }
  componentDidMount() {
    this.handleFakeLoading();
  }
  handleFakeLoading() {
    this.setState({ isLoading: true });
    this.handleEndLoad();
  }
  handleEndLoad() {
    setTimeout(this.setState({ isLoading: false }), 2000);
  }
  handleSearch(text) {

  }
  handleClearSearch() {

  }
  handleSelectCategory(category) {
    const {
      onSelectCategory
    } = this.props;
    onSelectCategory(category);
    this.handleFakeLoading();
  }
  render() {
    const {
      isLoading
    } = this.state;
    const {
      selectedCategory,
      categories,
      projects
    } = this.props;
    const visibleProjects = filterProjects(projects, selectedCategory);
    return (
      <div>
        <LoadingIndicator isLoading={isLoading} />
        <div className="portfolio-container">
          <h1 className="section-header text-grey portfolio__section-header">Portfolio</h1>
          <Divider />
          <CategoryFilterContainer
            listName="Projects"
            categories={categories}
            onSelectCategory={this.handleSelectCategory}
            selectedCategory={selectedCategory}
          />
          <PortfolioGrid
            {...this.props}
            projects={visibleProjects}
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
  selectedCategory: PropTypes.object.isRequired,
  searchTerm: PropTypes.string.isRequired,
  onSetSearchTerm: PropTypes.func.isRequired,
  onClearSearch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  projects: state.portfolio.projects,
  categories: state.portfolio.categories,
  selectedCategory: state.portfolio.selectedCategory,
  searchTerm: PropTypes.string
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    onSelectCategory: (category) => selectProjectCategory(category),
    onSetSearchTerm: (searchTerm) => setPortfolioSearch(searchTerm),
    onClearSearch: () => clearPortfolioSearch()
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Portfolio);
