import * as actionType from '../actions/types';

function comments(state = [], action) {
  switch (action.type) {
    case actionType.RECEIVE_COMMENTS: {
      const newComments = action.comments
        .reduce((newObj, comment) => ({
          ...newObj,
          [comment.id]: comment,
        }), {});
      return {
        ...newComments,
      };
    }

    case actionType.ADD_COMMENT:
    case actionType.UPDATE_COMMENT:
    case actionType.VOTE_COMMENT:
      return {
        ...state,
        [action.comment.id]: action.comment,
      };

    case actionType.DELETE_COMMENT: {
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
