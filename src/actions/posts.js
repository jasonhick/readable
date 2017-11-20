import * as api from '../utils/api';
import * as type from './types';

const receivePosts = posts => ({
  type: type.RECEIVE_POSTS,
  posts,
});

const getPost = post => ({
  type: type.GET_POST,
  post,
});

export const getAllPosts = () => dispatch => (
  api.fetchAllPosts()
    .then(data => dispatch(receivePosts(data)))
);

export const getPostById = id => dispatch => (
  api.fetchPostById(id)
    .then(data => dispatch(getPost(data)))
);
