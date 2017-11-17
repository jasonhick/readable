import * as ReadableAPI from '../utils/api';

export const FETCH_POSTS = 'FETCH_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const LOAD_POSTS = 'LOAD_POSTS';
export const ADD_POST = 'ADD_POST';

export function addPost(post) {
  return {
    type: ADD_POST,
    post,
  };
}

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  payload: {
    posts,
  },
});

export const getAllPosts = () => dispatch => (
  ReadableAPI
    .fetchAllPosts()
    .then(data => dispatch(receivePosts(data)))
);
