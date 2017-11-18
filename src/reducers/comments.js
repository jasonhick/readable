import * as type from '../actions/types';

function comments(state = [], action) {
  switch (action.type) {
    case type.LOAD_COMMENTS:
      return {
        ...state,
        ...action.comments,
      };

    default:
      return state;
  }
}

export default comments;
