import axios from 'axios';

let { AUTH_TOKEN } = localStorage;
if (!AUTH_TOKEN) { AUTH_TOKEN = localStorage.AUTH_TOKEN = Math.random().toString(36).substr(-8); }

const URL = 'http://localhost:3001';
const headers = {
  Accept: 'application/json',
  Authorization: AUTH_TOKEN,
  'Content-Type': 'application/json',
};

// -----------------------------------
// CATEGORY API
// -----------------------------------
export const getCategories = () =>
  axios.get(`${URL}/categories`, { headers })
    .then(response => (response.data.categories));


// -----------------------------------
// POST API
// -----------------------------------
export const fetchAllPosts = () =>
  axios.get(`${URL}/posts`, { headers })
    .then(response => response.data)
    .catch((error) => {
      console.log(error);
    });

export const fetchPostById = id =>
  axios.get(`${URL}/posts/${id}`, { headers })
    .then(response => response.data)
    .catch((error) => {
      console.log(error);
    });


// -----------------------------------
// COMMENT API
// -----------------------------------
export const fetchCommentsByParentId = id =>
  axios.get(`${URL}/posts/${id}/comments`, { headers })
    .then(response => response.data)
    .catch((error) => {
      console.log(error);
    });

export const voteOnComment = (id, option) =>
  axios.post(`${URL}/comments/${id}`, { option }, { headers })
    .then(response => response.data)
    .catch((error) => { console.log(error); });

export const addComment = comment =>
  axios.post(`${URL}/comments`, comment, { headers })
    .then(response => response.data)
    .catch((error) => { console.log(error); });

export const deleteComment = id =>
  axios.delete(`${URL}/comments/${id}`, { headers })
    .then(response => response.data)
    .catch((error) => { console.log(error); });
