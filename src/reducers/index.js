import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';
import loveCounterArrReducer from './loveCounterArrReducer';
import showCommentBoxReducer from './showCommentBoxReducer';
import showCommentsReducer from './showCommentsReducer';

export default combineReducers({  
    posts: postsReducer, 
    users: usersReducer,
    loveCountArr: loveCounterArrReducer,
    showCommentBoxArr: showCommentBoxReducer,
    showCommentsArr: showCommentsReducer
});