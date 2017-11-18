import * as type from '../actions/types';

function posts(state = [], action) {
  switch (action.type) {
    case type.RECEIVE_POSTS:
      const postsArray = action.payload.posts;
      // Turn it into hashobjects for increased performance and easier handling
      const posts = postsArray.reduce(
        (map, obj) => {
          map[obj.id] = obj;
          return map;
        },
        {},
      );
      return {
        ...state,
        ...posts,
      };

    default:
      return state;
  }
}

export default posts;
