export default (state = [], action) => {
    switch(action.type) {
        case 'SHOW_COMMENTS':
            return action.payload;
        default: 
            return state;
    }
}