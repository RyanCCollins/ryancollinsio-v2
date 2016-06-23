import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import './PostListView.scss';
import { toastr, actions as toastrActions } from 'react-redux-toastr';
import {
  PostList,
  LoadingIndicator,
  Divider
} from '../../../components';

class PostListView extends React.Component {
  componentDidMount() {
    const {
      dispatch,
      fetchPostsFromApi,
      items
    } = this.props;
    if (items.length === 0) {
      dispatch(
        fetchPostsFromApi()
      );
    }
  }
  componentWillReceiveProps(nextProps) {
    console.log("Called component will receive props", nextProps);
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
      items,
      isFetching,
      errors,
      messages
    } = this.props;
    return (
      <div className="post-list-view__wrapper">
        <h1 className="section-header">Blog</h1>
        <h4 className="section-sub-title">Recent Posts</h4>
        <Divider />
        {isFetching &&
          <LoadingIndicator />
        }
        {!isFetching && items.length == 0 &&
          noPosts
        }
        {items.length > 0 &&
          <PostList
            { ...this.props }
            posts={items}
          />
        }
        {messages.length &&
          <div className="messages">{messages}</div>
        }
      </div>
    );
  }
}

PostListView.propTypes = {
  dispatch: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  posts: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  fetchPostsFromApi: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  console.log("state: ", state)
  return {
    posts: state.posts,
    items: state.posts.items,
    messages: state.messages.posts,
    errors: state.errors.posts,
    isFetching: state.posts.isFetching
  };
}

export default connect(mapStateToProps)(PostListView);
