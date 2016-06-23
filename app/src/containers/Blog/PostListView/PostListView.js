import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import './PostListView.scss';
import { toastr, actions as toastrActions } from 'react-redux-toastr';
import {
  PostList,
  LoadingIndicator
} from '../../../components';

class PostListView extends React.Component {
  componentDidMount() {
    const {
      dispatch,
      fetchPostsFromApi
    } = this.props;
    dispatch(
      fetchPostsFromApi()
    );
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
      messages
    } = this.props;
    return (
      <div className="post-list-view__wrapper">
        {isFetching && posts.length == 0 &&
          <LoadingIndicator />
        }
        {!isFetching && posts.length == 0 &&
          noPosts
        }
        {posts.length > 0 &&
          <PostList
            { ...this.props }
            posts={posts}
          />
        }
      </div>
    );
  }
}

PostListView.propTypes = {
  dispatch: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  fetchPostsFromApi: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    posts: state.posts.items,
    messages: state.messages,
    isFetching: state.posts.isFetching
  };
}

export default connect(mapStateToProps)(PostListView);
