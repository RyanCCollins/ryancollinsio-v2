import axios from 'axios';
import fetch from 'isomorphic-fetch';
/* Request / receive posts from API*/
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const DELETE_POST = 'DELETE_POST';

/* Display messages or errors when adding posts */
export const ADD_POST = 'ADD_POST';
export const DISPLAY_ERROR = 'DISPLAY_ERROR';
export const DISPLAY_MESSAGE = 'DISPLAY_MESSAGE';
export const DISMISS_MESSAGE = 'DISMISS_MESSAGE';

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
    posts: {
      items: json.posts
    }
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

function addPostToApi (post) {
  const newPost = encodePost(post);
  return dispatch => {
    dispatch(addPost(newPost));
    return axios.post(postUrl, newPost).then((results) => {
      dispatch({ type: 'DISPLAY_MESSAGE', message: 'Successfully added post to API.' });
    }).catch((error) => {
      dispatch({ type: 'DISPLAY_ERROR', error });
    });
  };
}

export function fetchPosts() {
  return function (dispatch) {
    dispatch(requestAllPosts());

    return fetch(listUrl)
      .then(response => response.json())
      .then(json =>
        dispatch(receivePosts(json))
      );
  };
}
