import React, { Component } from 'react'
import { Redirect, Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import addUser from '../actions/addUser';

class Home extends Component {

    constructor(props){
        super(props)
        this.state = {
            steamid: "",
        }
    }


    handleSubmit(event) {
        event.preventDefault()
        if(!this.props.user){
            this.props.addUser(this.state)
            return <Redirect to={`/users/${this.state.steamid}`} />
        }
    }

    handleChange(event){
        this.setState({
            [event.target.steamid]: event.target.value
        })
    }

    render() {
        // debugger
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.steamid} name="steamid"/>
                <input type="submit"/>
            </form>
        )
    }
}

export default withRouter(connect(null, { addUser })(Home))
