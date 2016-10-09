export default (state = null, action) => {
    switch (action.type) {
        case 'search_contacts':
            return action.payload;
        default:
            return state;
    }
};
