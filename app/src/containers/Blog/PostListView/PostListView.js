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

const getFilteredPosts = (
  category,
  posts
) => {
  if (category === null) {
    return posts;
  } else {
    return posts.filter((post) => post.category.name === category);
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
    {!isFetching && errors.length &&
      <Row>
        <ErrorPanel errors={errors} />
      </Row>
    }
    {!isFetching && messages.length && !errors.length &&
      <Row>
        <MessagePanel messages={messages} />
      </Row>
    }
  </div>
);

class PostListView extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelectCategory = this.handleSelectCategory.bind(this);
    this.finishLoading = this.finishLoading.bind(this);
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
  handleSelectCategory(categoryName) {
    const {
      dispatch,
      selectedCategory,
      selectPostCategory,
      deselectPostCategory
    } = this.props;
    if (selectedCategory !== null) {
      dispatch(
        selectPostCategory(categoryName)
      );
    } else {
      dispatch(
        deselectPostCategory()
      );
    }
  }
  showMessage(message) {
    toastr.info(message);
  }
  render() {
    const noPosts = (
      <div className="no-posts">
        <h4 className="no-posts-text">No posts found</h4>
      </div>
    );
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
          title={selectedCategory === null ? 'All Posts' : `Selected Category: ${selectedCategory}`}
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
        {visiblePosts !== undefined && visiblePosts.length > 0 &&
          <PostList
            { ...this.props }
            posts={visiblePosts}
          />
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
  deselectPostCategory: PropTypes.func.isRequired,
  postCategories: PropTypes.array.isRequired,
  selectedCategory: PropTypes.string
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
