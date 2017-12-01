import * as api from '../utils/api';
import makeActionCreator from '../utils/makeActionCreator';
import * as actionType from './types';

//----------------------------------------------
// CATEGORY ACTIONS
//----------------------------------------------
const receiveCategories = makeActionCreator(actionType.RECEIVE_CATEGORIES, 'categories');

//----------------------------------------------
// CATEGORY API CALLS
//----------------------------------------------
export const getCategories = () => dispatch => (
  api.getCategories()
    .then(data => dispatch(receiveCategories(data)))
);

export default getCategories;
