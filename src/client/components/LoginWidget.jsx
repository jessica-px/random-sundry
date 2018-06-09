import React from 'react';
import { withRouter } from "react-router-dom";
import TextInput from './TextInput.jsx';
import BigButton from './BigButton.jsx';
import SubmitButton from './SubmitButton.jsx';
//import FontAwesome from '@fortawesome/react-fontawesome';
import faUser from '@fortawesome/fontawesome-free-solid/faUser';
import faLock from '@fortawesome/fontawesome-free-solid/faLock';

class LoginWidget extends React.Component{
  state = {
    errorMessage: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.clearErrorMessage();
    const info = {
      username: e.target[0].value,
      password: e.target[1].value
    }
    console.log('Submitting form: '+ JSON.stringify(info));
    const url = '/api/register';
    fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      },
      body: JSON.stringify(info)
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
      this.props.history.push("/");
    }
    else if (info.usernameError){
      this.setErrorMessage(info.usernameError);
    }
    else if (info.passwordError){
      this.setErrorMessage(info.passwordError);
    }
    else if (info.message){
      this.setErrorMessage(info.message);
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
        <div className='cardHeaderBar'>{this.props.title}</div>
      
        <TextInput name='Username' max={20} icon={faUser} clearErrorMsg={this.clearErrorMessage}/>
        <TextInput name='Password' max={256} icon={faLock} clearErrorMsg={this.clearErrorMessage}/>
        <SubmitButton label='Create Account' />
        <div className="inputMessage">{this.state.errorMessage}</div>
        
      </form>
    )
  }
}

export default withRouter(LoginWidget);