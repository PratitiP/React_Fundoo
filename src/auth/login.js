import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = (e) => {
    console.log('login submitted');
    e.preventDefault();
    let user = {
      email: this.state.email,
      password: this.state.password
    }
    axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/login",
      user).
      then(res => {
        console.log('logged in successfully', res);
        if (res.status === 200) {
          this.props.history.push('./dashboard');
        }
      })
  }
  handleChange = (e) => {
    console.log('handle changed');
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <div className="container">
          <h2 className="center">Fundoo</h2>
          <h3>Login</h3>
          <form onSubmit={this.handleSubmit}>
            <div><input type="email" placeholder="email" name="email" value={this.state.email} onChange={this.handleChange} required /></div>
            <div><input type="password" placeholder="password" name="password" value={this.state.password} onChange={this.handleChange} required /></div>
            <button type="submit">Login</button>
            <div><Link to="/register">Create new account</Link></div>
          </form>
        </div>
      </div>
    )
  }
}

export default Login