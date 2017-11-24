import * as actionType from '../actions/types';

function posts(state = [], action) {
  switch (action.type) {
    case actionType.RECEIVE_POSTS: {
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

    case actionType.GET_POST:
      return {
        [action.post.id]: action.post,
      };

    case actionType.ADD_POST:
    case actionType.UPDATE_POST:
    case actionType.VOTE_POST:
      return {
        ...state,
        [action.post.id]: action.post,
      };

    default:
      return state;
  }
}

export default posts;
