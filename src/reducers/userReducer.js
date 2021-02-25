const  userReducer = (state={user: 1}, action) => {

    switch(action.type) {
        case "FETCH_USER":
            return {
                user: action.payload
            }
        case "ADD_USER":
            return{
                user: [...state.user, action.payload]
            }
        default:
            return state
    }
}

export default userReducer;