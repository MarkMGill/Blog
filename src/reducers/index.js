import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';
import loveCounterArrReducer from './loveCounterArrReducer';

export default combineReducers({  
    posts: postsReducer, 
    users: usersReducer,
    loveCountArr: loveCounterArrReducer
});