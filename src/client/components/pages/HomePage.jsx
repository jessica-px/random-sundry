import React from 'react';
import NavBar from './../NavBar.jsx';
import {connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDice} from '@fortawesome/pro-light-svg-icons/faDice';
import {faUserPlus} from '@fortawesome/pro-light-svg-icons/faUserPlus';
import {faSignInAlt} from '@fortawesome/pro-light-svg-icons/faSignInAlt';
import {faBookOpen} from '@fortawesome/pro-light-svg-icons/faBookOpen';
import {faHeart} from '@fortawesome/pro-light-svg-icons/faHeart';
import {faSignOut} from '@fortawesome/pro-light-svg-icons/faSignOut';
import BigButton from './../BigButton.jsx';
import LinkButton from './../LinkButton.jsx';
import IconButton from './../IconButton.jsx';


const HomePage = (props) => (
    <div>
    <div className="navShape">
        <div className="navTriangle">
            <FontAwesomeIcon icon={faDice} className='homeIcon' size='4x'/>
        </div>
    </div>

     

    <div className='homeGreeting'>

    {(!props.loggedIn && !props.validating) && notLoggedInContent(props)}
    {props.loggedIn && loggedInContent(props)}

    </div>
    </div>

)

const loggedInContent = (props) => {
    return(
    <div className='homeGreeting'>
        <p>Hi there, {props.username}!</p>
        <p>
            I can't think of any interesting text to put here right now.
            However, I think it should take up several lines.
        </p>
        <p>
            Otherwise the buttons will look unnaturally high up on the page.
            Anyway, enjoy the generators!
        </p>
        <div className="homeButtons">
            <IconButton label='Log Out' url='logout' icon={faSignOut} />
            <IconButton label='Browse' url='browse' icon={faBookOpen} />
            <IconButton label='Faves' url='faves' icon={faHeart} />
        </div> 
    </div>
    )
}

const notLoggedInContent = () => {
    return(
    <div className='homeGreeting'>
        <p>Hi there!</p>
        <p>
            This website hosts a collection of quick and snappy random generators
            for 5th Edition Dungeons and Dragons.
        </p>
        <p>
            Browse the generators as a guest, or sign up for an account so you 
            can save your favorite results!
        </p>
        <div className="homeButtons">
            {/* <LinkButton label='Sign Up' url='signup'/>
            <LinkButton label='Login' url='login' className='button--secondary'/>  */}
            <IconButton label='Sign Up' url='signup' icon={faUserPlus} />
            <IconButton label='Browse' url='browse' icon={faBookOpen} />
            <IconButton label='Login' url='login' icon={faSignInAlt} />
        </div>  
    </div>
    )
}

const mapStateToProps = (state) => {
    return{
        loggedIn: state.auth.loggedIn,
        username: state.auth.username,
        validating: state.auth.validating
    };
}

export default connect(mapStateToProps)(HomePage);
