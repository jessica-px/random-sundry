import React from 'react';
import TextInput from './TextInput.jsx';
//import FontAwesome from '@fortawesome/react-fontawesome';
import faUser from '@fortawesome/fontawesome-free-solid/faUser';
import faLock from '@fortawesome/fontawesome-free-solid/faLock';

class LoginWidget extends React.Component{
  state = {
    cardHeaderSmall: 'text',
    cardBody: []
  }

  render(){
    return(
      <div className='card loginCard'>
        <div className='cardHeaderBar'>{this.props.title}</div>
        <TextInput name='Username'max={20} focus={true} icon={faUser}/>
        <TextInput name='Password' max={256} focus={false} icon={faLock}/>
      </div>
    )
  }
}

export default LoginWidget;