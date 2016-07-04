import axios from 'axios';
import fetch from 'isomorphic-fetch';

const host = 'http://localhost:3000/';
const apiUrl = `${host}api/posts/`;
const listUrl = `${apiUrl}list`;
const postUrl = `${apiUrl}create`;

const inquiryUrl = `${host}api/contact/`;
const createInquiryUrl = `${inquiryUrl}create`;

const postHeaders = {
  'Accept': 'application/json, text/plain, */*',
  'Content-Type': 'x-www-form-urlencoded'
};

/* Request / receive posts from API*/
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const DELETE_POST = 'DELETE_POST';

/* Display messages or errors when adding posts */

export const DISPLAY_ERROR = 'DISPLAY_ERROR';
export const DISPLAY_MESSAGE = 'DISPLAY_MESSAGE';
export const DISMISS_MESSAGE = 'DISMISS_MESSAGE';

export const displayError = (error) => ({
  type: DISPLAY_ERROR,
  error
});

export const displayMessage = (message) => ({
  type: DISPLAY_MESSAGE,
  message
});

export const dismissMessage = (message) => ({
  type: DISMISS_MESSAGE,
  message
});

const requestAllPosts = () => ({
  type: REQUEST_POSTS
});

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
const didReceivePosts = (data) => ({
  type: RECEIVE_POSTS,
  items: data.posts,
  postCategories: data.categories
});

/* Returns dispatch of promise for fetching posts from the API. */
const fetchPostsAsync = () => {
  return dispatch => {
    dispatch(requestAllPosts());
    return fetch(listUrl)
      .then(response => response.json())
      .then(data => dispatch(didReceivePosts(data)))
      .catch(error => dispatch({ type: DISPLAY_ERROR, error }));
  };
};

/* Returns whether the posts should be fetched or not. */
const shouldFetchPosts = (state) => {
  const posts = state.posts;
  if (!posts.items) {
    return true;
  } else if (posts.isFetching) {
    return false;
  }
  return true
};

/* Fetch the posts asynchronously through the api. */
export const fetchPostsFromApi = () => {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState())) {
      return dispatch(fetchPostsAsync());
    } else {
      return Promise.resolve()
    }
  };
};

/* Add a post to the state */
export const ADD_POST = 'ADD_POST';
export const addPost = (post) => ({
  type: ADD_POST,
  post
});

function encodePost(post) {
  return {
    title: post.title,
    author: post.author,
    content: {
      md: post.content
    }
  };
}

const encodedPost = (data) => ({
  title: data.title,
  author: data.author,
  content: { md: data.content }
});

const addPostToApi = (post) => {
  const newPost = encodedPost(post);
  return dispatch => {
    dispatch(addPost(newPost));
    return axios.post(postUrl, newPost).then(results => {
      dispatch({ type: 'DISPLAY_MESSAGE', message: 'Successfully added post to API.' });
    }).catch(error => {
      dispatch({ type: 'DISPLAY_ERROR', error });
    });
  };
};

/* Post categories */
export const SELECT_POST_CATEGORY = "SELECT_POST_CATEGORY";
export const selectPostCategory = (category) => ({
  type: SELECT_POST_CATEGORY,
  category
});

export const SUBMIT_CONTACT = 'SUBMIT_CONTACT';
export const CONTACT_SUCCESS = 'CONTACT_SUCCESS';
export const CONTACT_FAILURE = 'CONTACT_FAILURE';
export const CONTACT_ERRORS = 'CONTACT_ERRORS';
export const CONTACT_MESSAGES = 'CONTACT_MESSAGES';

const submitContact = (params) => ({
  type: SUBMIT_CONTACT,
  params
});

const contactSuccess = () => ({
  type: CONTACT_SUCCESS
});

const contactFailure = () => ({
  type: CONTACT_FAILURE
});

const contactErrors = (errors) => ({
  type: CONTACT_ERRORS,
  errors
});

const contactMessages = (messages) => ({
  type: CONTACT_MESSAGES,
  messages
});

export const contact = (params) =>
  (dispatch) => {
    dispatch(submitContact(params));
    return fetch(createInquiryUrl, {
      method: 'post',
      headers: postHeaders,
      body: params
    }).then((response) =>
      response.json()
    ).then((_) => {
      dispatch(
        contactMessages({
          messages: ['Thanks for contacting me!  I will get back to you as soon as possible.']
        })
      )
      dispatch(contactSuccess());
    })
    .catch((error) => {
      dispatch(contactFailure());
      if (error) {
        console.log(`An error occured: ${error}`)
        dispatch(
          contactErrors({
            errors: [`An error occured: ${JSON.stringify(error.message)}`]
          })
        );
      }
    }
  );
  };
