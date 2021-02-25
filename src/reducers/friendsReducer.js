const  friendReducer = (state={friend: 1}, action) => {

    switch(action.type) {
        case "FETCH_FRIENDS":
            return {
                friends: action.payload
            }
        default:
            return state
    }
}

export default friendReducer;

