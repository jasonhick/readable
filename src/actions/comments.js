import * as action from './types';

export const loadComments = comments => ({
  type: action.LOAD_COMMENTS,
  comments,
});

export const addComment = comment => ({
  type: action.ADD_COMMENT,
  comment,
});
