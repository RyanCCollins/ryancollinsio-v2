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
import serverLatency from 'utils/server';
import {
  selectProjectCategory,
  setPortfolioSearch,
  clearPortfolioSearch,
  portfolioLoading,
  endPortfolioLoading,
  beginPortfolioLoading
} from '../../actions/actionCreators';
import { filterProjects } from './helpers';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClearSearch = this.handleClearSearch.bind(this);
    this.handleSelectCategory = this.handleSelectCategory.bind(this);
    this.handleEndLoad = this.handleEndLoad.bind(this);
  }
  componentDidMount() {
    const { startLoad } = this.props;
    startLoad();
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
  handleEndLoad(index) {
    const {
      projects
    } = this.props;
    if (index === projects.length - 1) {
      const { endLoad } = this.props;
      serverLatency(3000).then(() => {
        endLoad();
      });
    }
  }
  handleSelectCategory(category) {
    const {
      onSelectCategory
    } = this.props;
    onSelectCategory(category);
  }
  render() {
    const {
      selectedCategory,
      categories,
      projects,
      searchTerm,
      isLoading
    } = this.props;
    const visibleProjects = filterProjects(projects, selectedCategory);
    return (
      <LoadingIndicator isLoading={isLoading}>
        <div className="portfolio-container">
          <h1 className="section-header text-grey portfolio__section-header">
            Portfolio
          </h1>
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
      </LoadingIndicator>
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
  onClearSearch: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onLoad: PropTypes.func.isRequired,
  endLoad: PropTypes.func.isRequired,
  startLoad: PropTypes.func.isRequired
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  projects: state.portfolio.projects,
  categories: state.portfolio.categories,
  selectedCategory: state.portfolio.selectedCategory,
  searchTerm: state.portfolio.searchTerm,
  isLoading: state.portfolio.isLoading
});

// mapDispatchToProps :: {Dispatch} -> {Props}
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    onSelectCategory: (category) => selectProjectCategory(category),
    onSetSearchTerm: (searchTerm) => setPortfolioSearch(searchTerm),
    onClearSearch: () => clearPortfolioSearch(),
    onLoad: () => portfolioLoading(),
    endLoad: () => endPortfolioLoading(),
    startLoad: () => beginPortfolioLoading()
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Portfolio);
