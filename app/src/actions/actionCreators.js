import axios from 'axios';
/* Request / receive posts from API*/
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const DELETE_POST = 'DELETE_POST';

/* Display messages or errors when adding posts */
export const ADD_POST = 'ADD_POST';
export const DISPLAY_ERROR = 'DISPLAY_ERROR';
export const DISPLAY_MESSAGE = 'DISPLAY_MESSAGE';

const host = 'http://localhost:3000/';
const apiUrl = `${host}api/`;
const listUrl = `${apiUrl}list`;
const postUrl = `${apiUrl}create`;

function requestAllPosts() {
  return {
    type: REQUEST_POSTS
  };
}

export function addPost(post) {
  return {
    type: ADD_POST,
    post
  };
}

function receivePosts(json) {
  return {
    type: RECEIVE_POSTS,
    posts: json.posts
  };
}

function encodePost(post) {
  return {
    title: post.title,
    author: post.author,
    content: {
      md: post.content
    }
  };
}

function addPostToApi(post) {
  const newPost = encodePost(post);
  return dispatch => {
    dispatch(addPost(newPost));
    return axios.post(postUrl, newPost).then((results) => {
      dispatch({ type: 'DISPLAY_MESSAGE', message: 'Successfully added post to API.' });
    }).catch((error) => {
      dispatch({ type: 'DISPLAY_ERROR', error })
    });
  }
}

function fetchPosts() {
  return dispatch => {
    dispatch(requestAllPosts());
    return axios.get(listUrl)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(json)));
  };
}

function shouldFetchPosts(state) {
  const posts = state.posts;
  if (!posts) {
    return true
  } else if (posts.isFetching) {
    return false
  } else {
    return posts.didInvalidate
  }
}

export function fetchPostsIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState())) {
      return dispatch(fetchPosts());
    }
  };
}
