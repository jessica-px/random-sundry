import React from 'react';
import { Link, withRouter } from "react-router-dom"; // withRouter allows redirects
import TextInput from './TextInput.jsx';
import BigButton from './BigButton.jsx';
import SubmitButton from './SubmitButton.jsx';
import FontAwesome from '@fortawesome/react-fontawesome';
import faUser from '@fortawesome/fontawesome-free-solid/faUser';
import faLock from '@fortawesome/fontawesome-free-solid/faLock';
import faDice from '@fortawesome/fontawesome-free-solid/faDice';
import {connect} from 'react-redux';
import { validateToken, setUsername } from '../actions/authActions';

class LoginWidget extends React.Component{
  state = {
    errorMessage: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.clearErrorMessage();
    const userInfo = {
      username: e.target[0].value,
      password: e.target[1].value
    }
    this.logIn(userInfo);
  }

  logIn = (userInfo) => {
    const url = '/auth/login';
    console.log('Submitting form: '+ JSON.stringify(userInfo));
    fetch(url, {
      method: 'POST',
      credentials: 'include', // necessary for storing session cookies
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      },
      body: JSON.stringify(userInfo)
    }).then((res) => {
      return res.json();
    }).then((info) => {
      this.handleSeverMessage(info);
    })
  }

  // Handle Error / Success messages from server
  handleSeverMessage = (info) => {
    // Redirects to home page on success
    if (info.success){
      console.log(info.success);
      console.log('Cookies: ' + document.cookie);
      //this.props.dispatch(validateToken());
      this.props.dispatch(setUsername(info.username));
      this.props.history.push("/");
    }
    else if (info.message){
      if (info.message === 'Missing credentials'){
        this.setErrorMessage('Username and password required.');
      }
      else{
        this.setErrorMessage(info.message);
      }
    }
  }

  clearErrorMessage = () => {
    this.setState(() => ({
      errorMessage: ''
    }))
  }

  setErrorMessage = (msg) => {
    this.setState(() => ({
      errorMessage: msg
    }))
  }

  render(){
    return(
      <form className='card loginCard' onSubmit={this.handleSubmit}>
        <div className='cardHeaderBar'>Login</div>
        <FontAwesome icon={faDice} className='cardDiceIcon' size='4x'/>
        <TextInput name='Username' max={20} icon={faUser} clearErrorMsg={this.clearErrorMessage}/>
        <TextInput name='Password' max={256} icon={faLock} clearErrorMsg={this.clearErrorMessage} password={true}/>
        <div className="inputMessage">{this.state.errorMessage}</div>
        <SubmitButton label='Login' />
        <div className="inputQuestionText">Don't have an account yet? <Link to={'/signup'}>Sign up</Link>.</div>
        
      </form>
    )
  }
}



export default connect()(withRouter(LoginWidget));