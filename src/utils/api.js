import axios from 'axios';

// Generate a unique token for storing your bookshelf data on the backend server.
let { AUTH_TOKEN } = localStorage;
if (!AUTH_TOKEN) { AUTH_TOKEN = localStorage.token = Math.random().toString(36).substr(-8); }

const END_POINT = 'http://localhost:3001';
const headers = {
  Accept: 'application/json',
  Authorization: AUTH_TOKEN,
  'Content-Type': 'application/json',
};

export const getCategories = () =>
  axios.get(`${END_POINT}/categories`, { headers })
    .then(response => (response.data.categories));

export const fetchAllPosts = () =>
  axios.get(`${END_POINT}/posts`, { headers })
    .then(response =>
      response.data)
    .catch((error) => {
      // error handler here
    });
