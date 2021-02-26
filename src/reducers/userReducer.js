const  userReducer = (state={user: 1, loading: true}, action) => {

    switch(action.type) {
        case "FETCH_USER":
            return {
                
                user: action.payload
            }
        case "ADD_USER":
            return{
                user: action.payload
            }
        default:
            return state
    }
}

export default userReducer;