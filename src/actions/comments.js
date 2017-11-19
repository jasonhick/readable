import * as ReadableAPI from '../utils/api';
import * as type from './types';

const receiveComments = comments => ({
  type: type.RECEIVE_COMMENTS,
  comments,
});

const voteComment = comment => ({
  type: type.VOTE_COMMENT,
  comment,
});

export const getCommentsByPost = id => dispatch => (
  ReadableAPI
    .fetchCommentsByParentId(id)
    .then(data => dispatch(receiveComments(data)))
);

export const apiVoteComment = (id, option) => dispatch => (
  ReadableAPI
    .voteOnComment(id, option)
    .then(data => dispatch(voteComment(data)))
);
