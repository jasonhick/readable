import * as api from '../utils/api';
import * as type from './types';

const receiveComments = comments => ({
  type: type.RECEIVE_COMMENTS,
  comments,
});

const voteComment = comment => ({
  type: type.VOTE_COMMENT,
  comment,
});

const addComment = comment => ({
  type: type.ADD_COMMENT,
  comment,
});

const deleteComment = comment => ({
  type: type.DELETE_COMMENT,
  comment,
});

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

export const apiDeleteComment = id => dispatch => (
  api.deleteComment(id)
    .then(data => dispatch(deleteComment(data)))
);
