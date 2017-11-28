import * as api from '../utils/api';
import makeActionCreator from '../utils/makeActionCreator';
import * as actionType from './types';

//----------------------------------------------
// POST ACTIONS
//----------------------------------------------
const receivePosts = makeActionCreator(actionType.RECEIVE_POSTS, 'posts');
const getPost = makeActionCreator(actionType.GET_POST, 'post');
const addPost = makeActionCreator(actionType.ADD_POST, 'post');
const updatePost = makeActionCreator(actionType.UPDATE_POST, 'post');
const deletePost = makeActionCreator(actionType.DELETE_POST, 'post');

export function sortPosts(field) {
  return {
    type: actionType.SORT_POSTS,
    field,
  };
}

export const getAllPosts = () => dispatch => (
  api.fetchAllPosts()
    .then(data => dispatch(receivePosts(data)))
);

export const getPostById = id => dispatch => (
  api.fetchPostById(id)
    .then(data => dispatch(getPost(data)))
);

export const apiAddPost = post => dispatch => (
  api.addPost(post)
    .then(data => dispatch(addPost(data)))
);

export const apiUpdatePost = post => dispatch => (
  api.updatePost(post)
    .then(data => dispatch(updatePost(data)))
);
