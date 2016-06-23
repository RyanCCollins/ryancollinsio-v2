import fetch from 'isomorphic-fetch';

const host = 'http://localhost:3000/';
const apiUrl = `${host}api/`;
const listUrl = `${apiUrl}list`;
const postUrl = `${apiUrl}create`;

export const api = {
  fetchAllPosts() {
    return fetch(postUrl)
      .then(posts => posts.toJson());
  }
};
