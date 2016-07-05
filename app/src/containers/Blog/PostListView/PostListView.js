import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import './PostListView.scss';
import { toastr, actions as toastrActions } from 'react-redux-toastr';
import { bindActionCreators } from 'redux';
import {
  fetchPostsFromApi,
  selectPostCategory,
  clearPostsErrors,
  clearPostsMessages
} from 'actions/actionCreators';
import {
  Row,
  Column
} from 'react-foundation';
import {
  PostList,
  LoadingIndicator,
  Divider,
  MessagesSection,
  CategoryList
} from '../../../components';
import NoPostsFound from '../Misc/NoPostsFound';

const containsCategory = (post, category) => {
  const categories = post.categories.filter(
    (cat) => cat._id == category.id
  );
  return categories.length > 0;
};

const getFilteredPosts = (
  category,
  posts
) => {
  if (category === null || category.name == 'All') {
    return posts;
  }
  return posts.filter((post) => {
    if (containsCategory(post, category)) {
      return post;
    }
    return undefined;
  });
};

/* Only used internally and it's so small so not worth creating a new component */
const SectionSubTitle = ({
  title
}) => (
  <h4 className="section-sub-title">
    {title}
  </h4>
);

SectionSubTitle.propTypes = {
  title: PropTypes.string.isRequired
};

class PostListView extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelectCategory = this.handleSelectCategory.bind(this);
    this.finishLoading = this.finishLoading.bind(this);
    this.handleChangePage = this.handleChangePage.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      isLoading: props.isFetching
    };
  }
  componentDidMount() {
    const {
      posts,
      fetchPosts
    } = this.props;
    if (!posts.items || posts.items.length === 0) {
      fetchPosts();
    }
  }
  finishLoading() {
    this.setState({ isLoading: false });
  }
  handleChangePage() {

  }
  handleSelectCategory(category) {
    const {
      selectPostCat
    } = this.props;
    selectPostCat(category);
  }
  showMessage(message) {
    toastr.info(message);
  }
  handleClose(sender) {
    const {
      clearErrors,
      clearMessages
    } = this.props;
    const theElement = sender.target.id;
    if (theElement === 'button-close-error-panel') {
      clearErrors();
    } else if (theElement === 'button-close-messages-panel') {
      clearMessages();
    }
  }
  render() {
    const {
      posts,
      isFetching,
      postCategories,
      selectedCategory,
      errors,
      messages
    } = this.props;
    const items = posts.items;
    const visiblePosts = getFilteredPosts(selectedCategory, items);
    return (
      <LoadingIndicator isLoading={isFetching}>
        <div className="post-list-view__wrapper">
          <MessagesSection messages={messages} errors={errors} onClose={this.handleClose} />
          <h1 className="section-header">From the Blog</h1>
          <SectionSubTitle
            title={selectedCategory.name == 'All' ?
              'All Posts'
            :
              `Selected Category: ${selectedCategory.name}`
            }
          />
          <Divider />
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
            <NoPostsFound
              selectedCategory={selectedCategory}
            />
          }
        </div>
      </LoadingIndicator>
    );
  }
}

PostListView.propTypes = {
  dispatch: PropTypes.func.isRequired,
  errors: PropTypes.array.isRequired,
  messages: PropTypes.array.isRequired,
  posts: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  fetchPosts: PropTypes.func.isRequired,
  selectPostCat: PropTypes.func.isRequired,
  postCategories: PropTypes.array.isRequired,
  selectedCategory: PropTypes.object.isRequired,
  clearMessages: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  posts: state.posts,
  postCategories: state.posts.categories,
  selectedCategory: state.posts.selectedCategory,
  messages: state.messages.posts,
  errors: state.errors.posts,
  isFetching: state.posts.isFetching
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    fetchPosts: () => fetchPostsFromApi(),
    selectPostCat: (category) => selectPostCategory(category),
    clearMessages: () => clearPostsMessages(),
    clearErrors: () => clearPostsErrors()
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostListView);
