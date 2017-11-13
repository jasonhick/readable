// API CALLS
export const LOAD_POSTS = 'LOAD_POSTS';
export const LOAD_COMMENTS = 'LOAD_COMMENTS';
export const LOAD_CATEGORIES = 'LOAD_CATEGORIES';

// GET ACTIONS
export const GET_POSTS = 'GET_POSTS';
export const GET_POST = 'GET_POST';
export const GET_COMMENTS = 'GET_COMMENTS';

// ADD ACTIONS
export const ADD_POST = 'ADD_POST';
export const ADD_COMMENT = 'ADD_COMMENT';

// DELETE ACTIONS
export const DELETE_POST = 'DELETE_POST';
export const DELETE_COMMENT = 'DELETE_COMMENT';


// POST ACTIONS
function loadPosts() {
  return {
    type: LOAD_POSTS,
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
