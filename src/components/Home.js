import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'

export default class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            steamid: this.props.user
        }
    }
    render() {
        return (
            <div>
                <Link to={"/user"}><p>Hello world!</p></Link>
            </div>
        )
    }
}
