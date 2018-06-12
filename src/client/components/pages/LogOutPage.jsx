import React from 'react';
import NavBar from './../NavBar.jsx';
import { setLoggedOut } from '../../actions/authActions';
import {connect} from 'react-redux';


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
      <div>
        <div className='pageTitle'>You've logged out!</div>
        If this was a mistake, click here to log back in.
      </div>
    )
  }
}

export default connect()(LogOutPage);