import React, { Component, PropTypes } from 'react';
import PortfolioGrid from '../../components/Portfolio/PortfolioGrid';
import './Portfolio.scss';
import {
  Divider,
  LoadingIndicator,
  ExpandingSearch
} from '../../components';
import { CategoryFilterContainer } from '../../containers';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  selectProjectCategory,
  setPortfolioSearch,
  clearPortfolioSearch
} from '../../actions/actionCreators';

// filterProjects :: [Object] -> String -> [Object]
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

// search :: [Object] -> String -> Object
const search = (projects, searchTerm) =>
  projects.filter((item) =>
    item.title.includes(searchTerm) || item.category.includes(searchTerm)
  );

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.handleEndLoad = this.handleEndLoad.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClearSearch = this.handleClearSearch.bind(this);
    this.handleSelectCategory = this.handleSelectCategory.bind(this);
    this.handleFakeLoading = this.handleFakeLoading.bind(this);
    this.state = {
      isLoading: true
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
    const { onSetSearchTerm } = this.props;
    if (text.length > 0) {
      onSetSearchTerm(text);
    }
  }
  handleClearSearch() {
    const { onClearSearch } = this.props;
    onClearSearch();
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
      projects,
      searchTerm
    } = this.props;
    const visibleProjects = filterProjects(projects, selectedCategory);
    const searchFilteredProducts = search(projects, searchTerm);
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
          <div className="perfect-center" style={{ display: 'none' }}>
            <ExpandingSearch
              onSearch={this.handleSearch}
              onClear={this.handleClearSearch}
              value={searchTerm}
            />
          </div>
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
  searchTerm: PropTypes.string,
  onSetSearchTerm: PropTypes.func.isRequired,
  onClearSearch: PropTypes.func.isRequired
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  projects: state.portfolio.projects,
  categories: state.portfolio.categories,
  selectedCategory: state.portfolio.selectedCategory,
  searchTerm: state.portfolio.searchTerm
});

// mapDispatchToProps :: {Dispatch} -> {Props}
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
