import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to Fundoo Dashboard</h1>
                <Link to='/login'>Logout</Link>
            </div>
        )
    }
}
