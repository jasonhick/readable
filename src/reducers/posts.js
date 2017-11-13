import * as readAPI from '../utils/api';
import {
  GET_POSTS,
  ADD_POST,
} from '../actions';

function posts(state = [], action) {
  switch (action.type) {
    case GET_POSTS:
      return state;

    case ADD_POST:
      return Object.assign({}, state, {
        posts: [
          ...state.posts,
          {
            post: action.post,
          },
        ],
      });

    default:
      return state;
  }
}

export default posts;
