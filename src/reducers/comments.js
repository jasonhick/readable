import {
  RECEIVE_COMMENTS,
  VOTE_COMMENT,
  ADD_COMMENT,
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
    case VOTE_COMMENT:
      return {
        ...state,
        [action.comment.id]: action.comment,
      };

    default:
      return state;
  }
}

export default comments;
