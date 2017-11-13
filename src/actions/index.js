export const GET_POSTS = 'GET_POSTS';
export const ADD_POST = 'ADD_POST';
export const GET_COMMENTS = 'GET_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';

// POST ACTIONS
function getPosts() {
  return {
    type: GET_POSTS,
  };
}

function addPost(post) {
  return {
    type: ADD_POST,
    payload: {
      post,
    },
  };
}


// COMMENT ACTIONS
function getComments() {
  return {
    type: GET_COMMENTS,
  };
}

export default function addComment(body, author, timestamp) {
  return {
    type: ADD_COMMENT,
    body,
    author,
    timestamp,
  };
}
