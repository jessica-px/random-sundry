import React from 'react';
// import AccountButton from './AccountButton.jsx';
import DropdownUser from './DropdownUser.jsx';
import DropdownSignup from './DropdownSignup.jsx';
import DropdownBrowse from './DropdownBrowse.jsx';
import HomeButton from './HomeButton.jsx';
import AboutButton from './AboutButton.jsx';
import { validateToken } from '../actions/authActions';
import {connect} from 'react-redux';

class NavBar extends React.Component{
  state = {
    errorMessage: ''
  }

  // on first load, validate token credentials 
  // (to see if uesr is logged in)
  componentWillMount = () => {
    this.props.dispatch(validateToken());
  }

  render(){
    return(
      <div>
        <div className="navBar">
          <HomeButton />
          <AboutButton />
          <DropdownBrowse />
          {this.props.loggedIn && <DropdownUser />}
          {!this.props.loggedIn && <DropdownSignup />}
        </div>
      </div>  
    )
  }
}

const mapStateToProps = (state) => {
  return{
      loggedIn: state.auth.loggedIn,
      username: state.auth.username
  };
}

export default connect(mapStateToProps)(NavBar);