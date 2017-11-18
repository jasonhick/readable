import axios from 'axios';

let { AUTH_TOKEN } = localStorage;
if (!AUTH_TOKEN) { AUTH_TOKEN = localStorage.token = Math.random().toString(36).substr(-8); }

const END_POINT = 'http://localhost:3001';
const headers = {
  Accept: 'application/json',
  Authorization: AUTH_TOKEN,
  'Content-Type': 'application/json',
};

// CATEGORY API CALLS
export const getCategories = () =>
  axios.get(`${END_POINT}/categories`, { headers })
    .then(response => (response.data.categories));

// POST API CALLS
export const fetchAllPosts = () =>
  axios.get(`${END_POINT}/posts`, { headers })
    .then(response => response.data)
    .catch((error) => {
      console.log(error);
    });

// COMMENT API CALLS
export const fetchCommentsByParentId = id =>
  axios.get(`${END_POINT}/posts/${id}/comments`, { headers })
    .then(response => response.data)
    .catch((error) => {
      console.log(error);
    });


export const voteComment = (id, option) =>
  axios.post(`${END_POINT}/comments/${id}`, { headers })
    .then(response => response.data)
    .catch((error) => {
      console.log(error);
    });
