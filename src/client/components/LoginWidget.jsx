import React from 'react';
import TextInput from './TextInput.jsx';
import BigButton from './BigButton.jsx';
import SubmitButton from './SubmitButton.jsx';
//import FontAwesome from '@fortawesome/react-fontawesome';
import faUser from '@fortawesome/fontawesome-free-solid/faUser';
import faLock from '@fortawesome/fontawesome-free-solid/faLock';

class LoginWidget extends React.Component{
  state = {
    cardHeaderSmall: 'text',
    cardBody: []
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const info = {
      username: e.target[0].value,
      password: e.target[1].value
    }
    console.log('submitting form: '+ JSON.stringify(info));
    const url = '/api/register';
    fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(info)
    }).then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data);
      })
  }

  render(){
    return(
      <form className='card loginCard' onSubmit={this.handleSubmit}>
        <div className='cardHeaderBar'>{this.props.title}</div>
      
        <TextInput name='Username' max={20} icon={faUser}/>
        <TextInput name='Password' max={256} icon={faLock}/>
        <SubmitButton label='Create Account' />
        
      </form>
    )
  }
}

export default LoginWidget;