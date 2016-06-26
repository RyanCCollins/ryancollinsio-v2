import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import './PostListView.scss';
import { toastr, actions as toastrActions } from 'react-redux-toastr';
import {
  Row,
  Column
} from 'react-foundation';
import {
  PostList,
  LoadingIndicator,
  Divider,
  MessagePanel,
  ErrorPanel,
  CategoryList
} from '../../../components';

const containsCategory = (post, category) => {
  const categories = post.categories.filter((cat) => cat._id == category.id);
  return categories.length > 0;
};

const getFilteredPosts = (
  category,
  posts
) => {
  if (category === null || category.name == 'All') {
    return posts;
  } else {
    return posts.filter((post) => {
      if (containsCategory(post, category)) {
        return post;
      }
      return undefined;
    });
  }
};

const SectionSubTitle = ({
  title
}) => (
  <h4 className="section-sub-title">
    {title}
  </h4>
);

const MessagesSection = ({
  isFetching,
  messages,
  errors
}) => (
  <div className="messages-section">
    {(!isFetching && errors.length) &&
      <Row>
        <ErrorPanel errors={errors} />
      </Row>
    }
    {(!isFetching && messages.length && !errors.length) &&
      <Row>
        <MessagePanel messages={messages} />
      </Row>
    }
  </div>
);

const NoPostsFound = ({
  category
}) => (
  <Row>
    <Column isColumn small={12} large={6} centerOnSmall>
      <div className="no-posts">
        <h4 className="no-posts-text">
          No posts found {category !== null ? `under the ${category.name} category.` : ''}
        </h4>
      </div>
    </Column>
  </Row>
);

class PostListView extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelectCategory = this.handleSelectCategory.bind(this);
    this.finishLoading = this.finishLoading.bind(this);
    this.handleChangePage = this.handleChangePage.bind(this);
    this.state = {
      isLoading: props.isFetching
    };
  }
  componentDidMount() {
    const {
      dispatch,
      fetchPostsFromApi,
      posts
    } = this.props;
    if (!posts.items || posts.items.length === 0) {
      dispatch(
        fetchPostsFromApi().then(() => {
          console.log("called then in fetch apps")
          this.finishLoading();
        })
      );
    }
  }
  finishLoading() {
    this.setState({ isLoading: false });
  }
  handleChangePage() {

  }
  handleSelectCategory(category) {
    const {
      dispatch,
      selectPostCategory
    } = this.props;
    dispatch(
      selectPostCategory(category)
    );
  }
  showMessage(message) {
    toastr.info(message);
  }
  render() {
    const {
      posts,
      isFetching,
      postCategories,
      selectedCategory
    } = this.props;
    const items = posts.items;
    const visiblePosts = getFilteredPosts(selectedCategory, items);
    return (
      <div className="post-list-view__wrapper">
        <h1 className="section-header">From the Blog</h1>
        <SectionSubTitle
          title={selectedCategory === 'All' ? 'All Posts' : `Selected Category: ${selectedCategory.name}`}
        />
        <Divider />
        <MessagesSection {...this.props} />
        {this.state.isLoading &&
          <LoadingIndicator />
        }
        <Row className="category-links">
          <Column large={6} small={12} isColumn centerOnSmall>
            <CategoryList
              categories={postCategories}
              onSelectCategory={this.handleSelectCategory}
              selectedCategory={selectedCategory}
            />
          </Column>
        </Row>
        {visiblePosts !== undefined && visiblePosts.length > 0 ?
          <PostList
            posts={visiblePosts}
            onChangePage={this.handleChangePage}
          />
        :
          <NoPostsFound category={selectedCategory} />
        }
      </div>
    );
  }
}

PostListView.propTypes = {
  dispatch: PropTypes.func.isRequired,
  errors: PropTypes.array.isRequired,
  messages: PropTypes.array.isRequired,
  posts: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  fetchPostsFromApi: PropTypes.func.isRequired,
  selectPostCategory: PropTypes.func.isRequired,
  postCategories: PropTypes.array.isRequired,
  selectedCategory: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  posts: state.posts,
  postCategories: state.posts.categories,
  selectedCategory: state.posts.selectedCategory,
  messages: state.messages.posts,
  errors: state.errors.posts,
  isFetching: state.posts.isFetching
});

export default connect(mapStateToProps)(PostListView);
