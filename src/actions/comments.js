import * as api from '../utils/api';
import makeActionCreator from '../utils/makeActionCreator';
import * as actionType from './types';

//----------------------------------------------
// COMMENT ACTIONS
//----------------------------------------------
const receiveComments = makeActionCreator(actionType.RECEIVE_COMMENTS, 'comments');
const voteComment = makeActionCreator(actionType.VOTE_COMMENT, 'comment');
const addComment = makeActionCreator(actionType.ADD_COMMENT, 'comment');
const updateComment = makeActionCreator(actionType.UPDATE_COMMENT, 'comment');
const deleteComment = makeActionCreator(actionType.DELETE_COMMENT, 'comment');


//----------------------------------------------
// COMMENT API CALLS
//----------------------------------------------
export const getCommentsByPost = id => dispatch => (
  api.fetchCommentsByParentId(id)
    .then(data => dispatch(receiveComments(data)))
);

export const apiVoteComment = (id, option) => dispatch => (
  api.voteOnComment(id, option)
    .then(data => dispatch(voteComment(data)))
);

export const apiAddComment = comment => dispatch => (
  api.addComment(comment)
    .then(data => dispatch(addComment(data)))
);

export const apiUpdateComment = comment => dispatch => (
  api.updateComment(comment)
    .then(data => dispatch(updateComment(data)))
);

export const apiDeleteComment = id => dispatch => (
  api.deleteComment(id)
    .then(data => dispatch(deleteComment(data)))
);
