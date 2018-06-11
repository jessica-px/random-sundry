import React from 'react';
import AccountButton from './AccountButton.jsx';
import DropdownBrowse from './DropdownBrowse.jsx';
import HomeButton from './HomeButton.jsx';
import AboutButton from './AboutButton.jsx';
import {connect} from 'react-redux';
import { validateToken } from '../actions/authActions';

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
            <AccountButton />
        </div>
      </div>  
    )
  }
}


export default connect()(NavBar);