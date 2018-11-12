import React from 'react';
import DropdownUser from './DropdownUser.jsx';
import DropdownSignup from './DropdownSignup.jsx';
import HomeButton from './HomeButton.jsx';
import AboutButton from './AboutButton.jsx';
import NavBarScrollMenu from './NavBarScrollMenu.jsx';
import { Link } from 'react-router-dom';
import { validateToken } from '../actions/authActions';
import {connect} from 'react-redux';

class NavBar extends React.Component{
  state = {
    errorMessage: ''
  }

  // on first load, validate token credentials 
  // (to see if user is logged in)
  componentDidMount = () => {
    this.props.dispatch(validateToken());
  }

  render(){
    return(
      <div>
        <div className="navBar--wrapper">
          <div className="navBar">
            <HomeButton />
            <AboutButton />
            <Link to="/browse"><div className='navButton ripple'>Browse</div></Link>


            {/* Log in Button */}
            {!this.props.loggedIn && 
              <Link to="/login"><div className='navButton ripple navbar--showWhenWide'>Log In</div></Link>
            }
            {/* Sign up Button */}
            {!this.props.loggedIn && 
              <Link to="/signup"><div className='navButton ripple navbar--showWhenWide'>Sign Up</div></Link>
            }

            {/* Logged in User icon */}
            {this.props.loggedIn && <DropdownUser />}
            {/* Not logged in (sign up/sign up) user icon */}
            {!this.props.loggedIn && <DropdownSignup />}
          </div>
        </div>
        <NavBarScrollMenu/>
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