import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

export const fetchPostsAndUsers = id => async (dispatch, getState) => {
    await dispatch(fetchPosts());
    await dispatch(loveCounterArr());
    
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
    console.log(getState().loveCountArr);
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

 
// memoize version
//export const fetchUser = id => dispatch => _fetchUser(id, dispatch); 
//const _fetchUser = _.memoize(async(id, dispatch) => {
    //const response = await jsonPlaceholder.get(`/users/${id}`);

    //dispatch({ type: 'FETCH_USER', payload: response.data });
//});
