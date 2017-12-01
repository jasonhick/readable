import * as api from '../utils/api';
import makeActionCreator from '../utils/makeActionCreator';
import * as actionType from './types';
import { incrementPostComment, decrementPostComment } from './posts';

//----------------------------------------------
// COMMENT ACTIONS
//----------------------------------------------
const receiveComments = makeActionCreator(actionType.RECEIVE_COMMENTS, 'comments');
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

export const apiAddComment = comment => dispatch => (
  api.addComment(comment)
    .then((data) => {
      dispatch(addComment(data));
      dispatch(incrementPostComment(data.parentId));
    })
);

export const apiUpdateComment = comment => dispatch => (
  api.updateComment(comment)
    .then(data => dispatch(updateComment(data)))
);

export const apiDeleteComment = id => dispatch => (
  api.deleteComment(id)
    .then((data) => {
      dispatch(deleteComment(data));
      dispatch(decrementPostComment(data.parentId));
    })
);
