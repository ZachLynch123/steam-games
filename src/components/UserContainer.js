import React from "react";
import { connect } from 'react-redux';
import fetchUser from '../actions/fetchUser';
import FriendsContainer from "./FriendsContainer";
import UserBox from './UserBox'

export class UserContainer extends React.Component {

  componentDidMount(){
    this.props.fetchUser(this.props.location.pathname.split("/").pop())
    console.log(this.props);
  }

  render() {
    const user = this.props.user.user.user
    return (
        <div>
            <UserBox user={user}/> 
            <FriendsContainer />
        </div>
      
    )
  }
}

const mapStateToProps = user => {
  return {
    user 
  }
}

export default connect(mapStateToProps, {fetchUser})(UserContainer);