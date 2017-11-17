import { RECEIVE_POSTS, ADD_POST } from '../actions';

function posts(state = [], action) {
  switch (action.type) {
    case ADD_POST:
      return [
        ...state,
        { ...action.post },
      ];

    case RECEIVE_POSTS:
      // return {
      //   ...state,
      //   ...action.payload.posts,
      // };

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
