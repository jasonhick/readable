import * as api from '../utils/api';
import makeActionCreator from '../utils/makeActionCreator';
import * as actionType from './types';

//----------------------------------------------
// VOTE ACTIONS
//----------------------------------------------
const voteComment = makeActionCreator(actionType.VOTE_COMMENT, 'comment');
const votePost = makeActionCreator(actionType.VOTE_POST, 'post');

//----------------------------------------------
// VOTE API CALLS
//----------------------------------------------
export const apiVote = (type, id, option) => dispatch => (
  type === 'post'
    ? api.voteOnPost(id, option).then(data => dispatch(votePost(data)))
    : api.voteOnComment(id, option).then(data => dispatch(voteComment(data)))
);

export default apiVote;
