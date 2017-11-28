import * as actionType from '../actions/types';

const initialState = {
  orderBy: '-timestamp',
};

function sorting(state = initialState, action) {
  switch (action.type) {
    case actionType.SORT_POSTS:
      return {
        ...state,
        orderBy: action.field,
      };

    default:
      return state;
  }
}

export default sorting;
