import * as ReadableAPI from '../utils/api';
import * as type from './types';

export const receivePosts = posts => ({
  type: type.RECEIVE_POSTS,
  payload: {
    posts,
  },
});

export const getAllPosts = () => dispatch => (
  ReadableAPI
    .fetchAllPosts()
    .then(data => dispatch(receivePosts(data)))
);
