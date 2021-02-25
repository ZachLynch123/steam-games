import React from "react";
import Friend from "../components/Friend";
import { connect } from 'react-redux';
import fetchFriends from '../actions/fetchFriends';

class FriendsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchFriends()
  }
  render() {
    
    const friends = this.props.friends.friend.friends
    while (this.props.friends.friend.friend === 1) {
      return (<p>Loading..</p>)
    }
    return (
      <div className="friends-container">
          {friends.map(friend => {
            return <Friend friend={friend}/>
          })}
      </div>
    );
  }
}

const mapStateToProps = friends => {
  return {
    friends
  }
}





export default connect(mapStateToProps, {fetchFriends})(FriendsContainer);