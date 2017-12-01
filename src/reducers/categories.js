import * as actionType from '../actions/types';

function categories(state = {}, action) {
  switch (action.type) {
    case actionType.RECEIVE_CATEGORIES: {
      const cats = action.categories.reduce((newObj, cat) => ({
        ...newObj,
        [cat.name]: cat,
      }), {});
      return {
        ...cats,
      };
    }

    default:
      return state;
  }
}

export default categories;
