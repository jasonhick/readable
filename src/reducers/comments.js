import {
  RECEIVE_COMMENTS,
  ADD_COMMENT,
  UPDATE_COMMENT,
  DELETE_COMMENT,
  VOTE_COMMENT,
} from '../actions/types';

function comments(state = [], action) {
  switch (action.type) {
    case RECEIVE_COMMENTS: {
      const newComments = action.comments
        .reduce((newObj, comment) => ({
          ...newObj,
          [comment.id]: comment,
        }), {});
      return {
        ...newComments,
      };
    }

    case ADD_COMMENT:
    case UPDATE_COMMENT:
    case VOTE_COMMENT:
      return {
        ...state,
        [action.comment.id]: action.comment,
      };

    case DELETE_COMMENT: {
      const newState = state;
      if (newState.hasOwnProperty(action.comment.id)) {
        delete newState[action.comment.id];
      }
      return {
        ...state,
        ...newState,
      };
    }

    default:
      return state;
  }
}

export default comments;
