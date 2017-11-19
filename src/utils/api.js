import axios from 'axios';

let { AUTH_TOKEN } = localStorage;
if (!AUTH_TOKEN) { AUTH_TOKEN = localStorage.AUTH_TOKEN = Math.random().toString(36).substr(-8); }

const URL = 'http://localhost:3001';
const headers = {
  Accept: 'application/json',
  Authorization: AUTH_TOKEN,
  'Content-Type': 'application/json',
};

// CATEGORY API CALLS
export const getCategories = () =>
  axios.get(`${URL}/categories`, { headers })
    .then(response => (response.data.categories));

// POST API CALLS
export const fetchAllPosts = () =>
  axios.get(`${URL}/posts`, { headers })
    .then(response => response.data)
    .catch((error) => {
      console.log(error);
    });

// COMMENT API CALLS
export const fetchCommentsByParentId = id =>
  axios.get(`${URL}/posts/${id}/comments`, { headers })
    .then(response => response.data)
    .catch((error) => {
      console.log(error);
    });

export const voteOnComment = (id, option) =>
  axios.post(`${URL}/comments/${id}`, { option }, { headers })
    .then(response => response.data)
    .catch((error) => {
      console.log(error);
    });
