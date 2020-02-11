import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Dashboard extends Component {
    handleLogout=(e)=>{
        localStorage.removeItem("userId");
    }
    render() {
        return (
            <div>
                <h1>Welcome to Fundoo Dashboard</h1>
                <Link to='/login' onClick={this.handleLogout}>Logout</Link>
            </div>
        )
    }
}
