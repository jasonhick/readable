import * as type from '../actions/types';

function posts(state = [], action) {
  switch (action.type) {
    case type.RECEIVE_POSTS: {
      const postsArray = action.posts;
      const posts = postsArray.reduce(
        (map, post) => {
          map[post.id] = post;
          return map;
        },
        {},
      );
      return {
        ...state,
        ...posts,
      };
    }

    case type.GET_POST:
      return {
        [action.post.id]: action.post,
      };

    default:
      return state;
  }
}

export default posts;
