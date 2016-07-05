import axios from 'axios';
import fetch from 'isomorphic-fetch';

const host = process.env.NODE_ENV !== 'production' ?
  'http://localhost:3000/' : 'http://www.ryancollins.io/';

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

const requestAllPosts = () => ({
  type: REQUEST_POSTS
});

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
const didReceivePosts = (data) => ({
  type: RECEIVE_POSTS,
  items: data.posts,
  postCategories: data.categories
});


export const POSTS_FAILURE = 'POSTS_FAILURE';
const postsFailure = () => ({
  type: POSTS_FAILURE
});

export const POSTS_ERRORS = 'POSTS_ERRORS';
const postsErrors = (errors) => ({
  type: POSTS_ERRORS,
  errors
});

/* Returns dispatch of promise for fetching posts from the API. */
const fetchPostsAsync = () => {
  return dispatch => {
    dispatch(requestAllPosts());
    return fetch(listUrl)
      .then(response => response.json())
      .then(data => dispatch(didReceivePosts(data)))
      .catch(error => {
        dispatch(postsFailure());
        const errors = [];
        const theError = `An error has occured ${JSON.stringify(error.message)}`;
        console.log(theError);
        errors.push(theError);
        dispatch(postsErrors(errors));
      }
    );
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
  return true;
};

/* Fetch the posts asynchronously through the api. */
export const fetchPostsFromApi = () => {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState())) {
      return dispatch(fetchPostsAsync());
    } else {
      return Promise.resolve();
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
      const messages = [];
      messages.push('Thanks for contacting me!  I will get back to you as soon as possible.');
      dispatch(contactSuccess());
      dispatch(contactMessages(messages));
    })
    .catch((error) => {
      dispatch(contactFailure());
      if (error) {
        const errors = [];
        const theError = `An error occured ${error.message}`
        errors.push(theError);
        setTimeout(
          /* Server response happens so fast, need to fake server timeout */
          dispatch(contactErrors(errors)),
          2000
        );
      }
    }
  );
  };
