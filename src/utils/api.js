import axios from 'axios';

let { AUTH_TOKEN } = localStorage;
if (!AUTH_TOKEN) {
  AUTH_TOKEN = localStorage.AUTH_TOKEN = Math.random().toString(36).substr(-8);
}

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


export const voteOnPost = (id, option) =>
  axios.post(`${URL}/posts/${id}`, { option }, { headers })
    .then(response => response.data)
    .catch((error) => { console.log(error); });


// POST: Add a new comment to a post
export const addPost = post =>
  axios.post(`${URL}/posts`, post, { headers })
    .then(response => response.data)
    .catch((error) => { console.log(error); });


// PUT: Update a post
export const updatePost = post =>
  axios.put(`${URL}/posts/${post.id}`, post, { headers })
    .then(response => response.data)
    .catch((error) => { console.log(error); });


// -----------------------------------
// COMMENT API
// -----------------------------------


// Set config defaults when creating the instance
const apiComment = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    Accept: 'application/json',
    Authorization: AUTH_TOKEN,
    'Content-Type': 'application/json',
  },
  responseType: 'json',
});

export const fetchCommentsByParentId = id =>
  axios.get(`${URL}/posts/${id}/comments`, { headers })
    .then(response => response.data)
    .catch((error) => {
      console.log(error);
    });

// POST: Vote on a comment
export const voteOnComment = (id, option) =>
  axios.post(`${URL}/comments/${id}`, { option }, { headers })
    .then(response => response.data)
    .catch((error) => { console.log(error); });


// POST: Add a new comment to a post
export const addComment = comment =>
  axios.post(`${URL}/comments`, comment, { headers })
    .then(response => response.data)
    .catch((error) => { console.log(error); });


// PUT: Update a comment
export const updateComment = comment =>
  axios.put(`${URL}/comments/${comment.id}`, comment, { headers })
    .then(response => response.data)
    .catch((error) => { console.log(error); });


// DELETE: Delete a comment
export const deleteComment = id =>
  axios.delete(`${URL}/comments/${id}`, { headers })
    .then(response => response.data)
    .catch((error) => { console.log(error); });
