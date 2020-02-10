import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      registrationErrors: ''
    }
  }

  handleSubmit = (e) => {
    console.log('form submitted');
    e.preventDefault();
    let user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      service: 'basic'
    }
    axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp",
      user,
      { withCredentials: true })
      .then((res) => {
        console.log('registration response', res);
        if(res.status===200){
          this.props.history.push('./login');
        }else {
          console.log('status code other than 200');
        }
      }).catch(err => {
        console.log('registration error', err);
      });
  }

  handleChange = (e) => {
    // console.log('handle change', e);
    this.setState({
      [e.target.name]: e.target.value
    })

  }

  render() {
    return (
      <div>
        <div className="container">
          <h2 className="center">Fundoo</h2>
          <h3>Register</h3>
          <form onSubmit={this.handleSubmit}>
            <div><input type="text" placeholder="First name" name="firstName" value={this.state.firstName} onChange={this.handleChange} required /></div>

            <div><input type="text" placeholder="Last name" name="lastName" value={this.state.lastName} onChange={this.handleChange} required /></div>

            <div><input type="email" placeholder="email" name="email" value={this.state.email} onChange={this.handleChange} required /></div>

            <div><input type="password" placeholder="password" name="password" value={this.state.password} onChange={this.handleChange} required /></div>

            <div><input type="password" placeholder="confirm password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} required /></div>


            <div><Link to="/login">Sign in instead</Link><button type="submit">Create account</button></div>
          </form>

        </div>
      </div>
    )
  }
}

export default Register