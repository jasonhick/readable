import axios from 'axios';

// const API_URL = 'https://reddit-clone-server-kdgzczvlpv.now.sh';
const API_URL = process.env.NODE_ENV === 'development'
  ? process.env.REACT_APP_API_DEV_URL
  : process.env.REACT_APP_API_PROD_URL;

let { AUTH_TOKEN } = localStorage;
if (!AUTH_TOKEN) {
  AUTH_TOKEN = localStorage.AUTH_TOKEN = Math.random().toString(36).substr(-8);
}

const headers = {
  Accept: 'application/json',
  Authorization: AUTH_TOKEN,
  'Content-Type': 'application/json',
};

// -----------------------------------
// CATEGORY API
// -----------------------------------
export const getCategories = () =>
  axios.get(`${API_URL}/categories`, { headers })
    .then(response => (response.data.categories));


// -----------------------------------
// POST API
// -----------------------------------
export const fetchAllPosts = () =>
  axios.get(`${API_URL}/posts`, { headers })
    .then(response => response.data)
    .catch((error) => { console.log(error); });


export const fetchPostById = id =>
  axios.get(`${API_URL}/posts/${id}`, { headers })
    .then(response => response.data)
    .catch((error) => { console.log(error); });


export const voteOnPost = (id, option) =>
  axios.post(`${API_URL}/posts/${id}`, { option }, { headers })
    .then(response => response.data)
    .catch((error) => { console.log(error); });


export const addPost = post =>
  axios.post(`${API_URL}/posts`, post, { headers })
    .then(response => response.data)
    .catch((error) => { console.log(error); });


export const updatePost = post =>
  axios.put(`${API_URL}/posts/${post.id}`, post, { headers })
    .then(response => response.data)
    .catch((error) => { console.log(error); });


export const deletePost = id =>
  axios.delete(`${API_URL}/posts/${id}`, { headers })
    .then(response => response.data)
    .catch((error) => { console.log(error); });


// -----------------------------------
// COMMENT API
// -----------------------------------
export const fetchCommentsByParentId = id =>
  axios.get(`${API_URL}/posts/${id}/comments`, { headers })
    .then(response => response.data)
    .catch((error) => {
      console.log(error);
    });


export const voteOnComment = (id, option) =>
  axios.post(`${API_URL}/comments/${id}`, { option }, { headers })
    .then(response => response.data)
    .catch((error) => { console.log(error); });


export const addComment = comment =>
  axios.post(`${API_URL}/comments`, comment, { headers })
    .then(response => response.data)
    .catch((error) => { console.log(error); });


export const updateComment = comment =>
  axios.put(`${API_URL}/comments/${comment.id}`, comment, { headers })
    .then(response => response.data)
    .catch((error) => { console.log(error); });


export const deleteComment = id =>
  axios.delete(`${API_URL}/comments/${id}`, { headers })
    .then(response => response.data)
    .catch((error) => { console.log(error); });
