import React from "react";
import { connect } from 'react-redux';
import fetchUser from '../actions/fetchUser';
import FriendsContainer from "./FriendsContainer";

export class UserBox extends React.Component {



  // componentDidMount(){
  //   this.props.fetchUser()
  // }

  render() {
    const user = this.props.user.user.user
    return (
      <div className="profile-box">
        <img src={ `${user.avatarmedium}` } alt="no pic?" />
         <h3>{user.personaname}</h3>
        </div>
    )
  }
}

const mapStateToProps = user => {
  return {
    user 
  }
}

export default connect(mapStateToProps, {fetchUser})(UserBox);