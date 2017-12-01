import * as _ from 'lodash';
import * as actionType from '../actions/types';

function posts(state = [], action) {
  switch (action.type) {
    case actionType.RECEIVE_POSTS: {
      const postsArray = action.posts;
      const posts = postsArray.reduce(
        (map, post) => {
          map[post.id] = post;
          return map;
        },
        {},
      );
      return {
        ...state,
        ...posts,
      };
    }

    case actionType.GET_POST:
      return {
        [action.post.id]: action.post,
      };

    case actionType.ADD_POST:
    case actionType.UPDATE_POST:
    case actionType.VOTE_POST:
      return {
        ...state,
        [action.post.id]: action.post,
      };

    case actionType.INCREMENT_POST_COMMENT:
      return {
        ...state,
        [action.parentId]: {
          ...state[action.parentId],
          commentCount: state[action.parentId].commentCount + 1,
        },
      };

    case actionType.DECREMENT_POST_COMMENT:
      return {
        ...state,
        [action.parentId]: {
          ...state[action.parentId],
          commentCount: state[action.parentId].commentCount - 1,
        },
      };
    case actionType.DELETE_POST: {
      return _.omit(state, [action.post.id]);
    }

    default:
      return state;
  }
}

export default posts;
