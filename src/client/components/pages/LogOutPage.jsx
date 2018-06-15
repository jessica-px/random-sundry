import React from 'react';
import NavBar from './../NavBar.jsx';
import { setLoggedOut } from '../../actions/authActions';
import {connect} from 'react-redux';
import IconButton from './../IconButton.jsx';
import faHome from '@fortawesome/fontawesome-pro-light/faHome';
import faBook from '@fortawesome/fontawesome-pro-light/faBookOpen';
import faLogin from '@fortawesome/fontawesome-pro-light/faSignInAlt';


class LogOutPage extends React.Component{

  componentWillMount(){
    console.log('mounted logout page')
    this.sendLogOutRequest();
  }

  sendLogOutRequest(){
    console.log('Sending logout request...');
    fetch('/auth/logout', {
      method: 'GET',
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      }
    }).then((res) => {
      this.props.dispatch(setLoggedOut());
      console.log('Done fetching');
    })
  }
  


  render(){
    return(
      <div className='logOutPageWrapper'>
        <div className='logOutTitle'>You are now logged out.</div>
        <div className="logOutText">Thanks for visiting!</div>
        <div className="logOutPageButtons">
            <IconButton label='Home' url='/' icon={faHome} />
            <IconButton label='Browse' url='ruins' icon={faBook} />
            <IconButton label='Login' url='login' icon={faLogin} />
        </div>  
      </div>
    )
  }
}

export default connect()(LogOutPage);