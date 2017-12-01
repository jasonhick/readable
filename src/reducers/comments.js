import * as _ from 'lodash';
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
      return _.omit(state, [action.comment.id]);
    }

    default:
      return state;
  }
}

export default comments;
