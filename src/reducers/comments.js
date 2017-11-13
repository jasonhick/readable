import * as readAPI from '../utils/api';
import {
  GET_COMMENTS,
  ADD_COMMENT,
} from '../actions';

function comments(state = [], action) {
  switch (action.type) {
    case GET_COMMENTS:
      return state;

    case ADD_COMMENT:
      return [
        ...state,
        {
          body: action.body,
          author: action.author,
          timestamp: action.timestamp,
        },
      ];

    default:
      return state;
  }
}

export default comments;
