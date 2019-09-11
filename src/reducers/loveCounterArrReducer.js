export default (state = [], action) => {
    switch(action.type) {
        case 'LOVE_COUNT_ARR':
            return action.payload;
        default: 
            return state;
    }
}