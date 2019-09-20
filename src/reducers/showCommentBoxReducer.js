export default (state = [], action) => {
    switch(action.type) {
        case 'SHOW_COMMENT_BOX':
            return action.payload;
        default: 
            return state;
    }
}