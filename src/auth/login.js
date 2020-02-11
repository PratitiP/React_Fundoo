import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../css/index.scss'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      validationError:{
        emailErr:'',
        passwordErr:''
      },
      isValid:true
    }
    
  }

  componentDidMount(){
    if(localStorage.getItem("userId")){
      console.log(localStorage.getItem("userId"));
      this.props.history.push('./dashboard');
    }
  }

  validate=(email,password)=>{
    if(email.length <1) {
      this.state.validationError.emailErr='Enter an email'
      this.setState({
        isValid:false
      })
    }
    if(password.length<1) {
      this.state.validationError.passwordErr='Enter a Password'
      this.setState({
        isValid:false
      })
    }
  }

  handleSubmit = (e) => {

    //clear error object before validate
    // Object.keys(this.state.validationError).forEach(k => this.state.validationError[k] = '');
    this.setState({
      validationError:{
        emailErr:'',
        passwordErr:''
      }    })
    // console.log('login submitted');
    console.log('validation error',this.state.validationError);

    //validate email and password fields
    this.validate(this.state.email,this.state.password);
    console.log('validation error',this.state.validationError);
    e.preventDefault();

    if(this.state.validationError.emailErr==='' && this.state.validationError.passwordErr===''){
    let user = {
      email: this.state.email,
      password: this.state.password
    }
    axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/login",
      user).
      then(res => {
        console.log('logged in successfully', res);
        console.log('user id access token : ', res.data.id);
        localStorage.setItem("userId", res.data.id);
        if (res.status === 200) {
          this.props.history.push('./dashboard');
        }
      }).catch(err =>{
        console.log("login error", err);
      });
    }
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
            <div><input type="text" placeholder="email" name="email" value={this.state.email} onChange={this.handleChange} /></div>
            <div className={this.state.isValid ? "hide" : "redText"}>{this.state.validationError.emailErr}</div>
            <div><input type="password" placeholder="password" name="password" value={this.state.password} onChange={this.handleChange} /></div>
            <div className={this.state.isValid ? "hide" : "redText"}>{this.state.validationError.passwordErr}</div>
            <button type="submit">Login</button>
            <div><Link to="/register">Create new account</Link></div>
          </form>
        </div>
      </div>
    )
  }
}

export default Login