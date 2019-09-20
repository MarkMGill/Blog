import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

export const fetchPostsAndUsers = id => async (dispatch, getState) => {
    await dispatch(fetchPosts());
    await dispatch(loveCounterArr());
    await dispatch(showCommentBoxFunc());
    await dispatch(showCommentsFunc());
    
    const userIDs = _.uniq(_.map(getState().posts, 'userId'));
    userIDs.forEach(id => dispatch(fetchUser(id)));
};

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');
    
    dispatch({type: 'FETCH_POSTS', payload: response.data});
};

export const fetchUser = id => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: 'FETCH_USER', payload: response.data });
};

export const loveCounterArr = (index) => (dispatch, getState) => {
    var newArr = [];
    if(getState().loveCountArr.length === 0) {
        newArr = getState().posts.map(post => {
            return 0;
        });
    } else {
        newArr = getState().loveCountArr.map((el, ind) => {
            return (ind === index) ? (el + 1) : el;
        });
    }
    
    dispatch({ type: 'LOVE_COUNT_ARR', payload: newArr });
};

export const showCommentBoxFunc = (index) => (dispatch, getState) => {
    
    var newArr = [];
    if(getState().showCommentBoxArr.length === 0) {
        newArr = getState().posts.map(post => {
            return 'd-none';
        });
    } else {
        newArr = getState().showCommentBoxArr.map(el => {
            return el;
        });
        newArr.forEach((el, ind) => {
            if(ind === index) {
                if(el === 'd-none') {
                    newArr[ind] = 'd-block mt-1';
                } else {
                    newArr[ind] = 'd-none';
                }
            } else {
                newArr[ind] = 'd-none';
            }
        });
    }
   
    dispatch({ type: 'SHOW_COMMENT_BOX', payload: newArr });
}

export const showCommentsFunc = (index, comment) => (dispatch, getState) => {

    var newArr = [];
    
    if(getState().showCommentsArr.length === 0) {
        getState().posts.forEach(() => {
            newArr = [...newArr, []];
        });
    } else {
        newArr = getState().showCommentsArr.map((el, ind) => {
            return (ind === index) ? [...el, comment] : el;
        });
    }
    
    dispatch({ type: 'SHOW_COMMENTS', payload: newArr });
}

 
// memoize version
//export const fetchUser = id => dispatch => _fetchUser(id, dispatch); 
//const _fetchUser = _.memoize(async(id, dispatch) => {
    //const response = await jsonPlaceholder.get(`/users/${id}`);

    //dispatch({ type: 'FETCH_USER', payload: response.data });
//});
