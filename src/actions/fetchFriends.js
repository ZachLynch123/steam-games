const fetchFriends = friends => {
    return (dispatch) => {
        fetch("http://localhost:3000/friends/")
            .then(res => res.json())
            .then(friends => {
                dispatch({type: "FETCH_FRIENDS", payload: friends})
  })
    }
}

export default fetchFriends;