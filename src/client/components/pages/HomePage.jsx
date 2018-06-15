import React from 'react';
import NavBar from './../NavBar.jsx';
import {connect} from 'react-redux';
import FontAwesome from '@fortawesome/react-fontawesome';
import faDice from '@fortawesome/fontawesome-free-solid/faDice';
import faUser from '@fortawesome/fontawesome-pro-light/faUserPlus';
import faLogin from '@fortawesome/fontawesome-pro-light/faSignInAlt';
import faBook from '@fortawesome/fontawesome-pro-light/faBookOpen';
import faHeart from '@fortawesome/fontawesome-pro-light/faHeart';
import faSignOut from '@fortawesome/fontawesome-pro-light/faSignOut';
import BigButton from './../BigButton.jsx';
import LinkButton from './../LinkButton.jsx';
import IconButton from './../IconButton.jsx';


const HomePage = (props) => (
    <div className="navShape">
 
        <div className="navTriangle">
            <FontAwesome icon={faDice} className='homeIcon' size='4x'/>
        </div>
        <div className='homeGreeting'>

            {!props.loggedIn && notLoggedInContent(props)}
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
            <IconButton label='Browse' url='ruins' icon={faBook} />
            <IconButton label='Faves' url='login' icon={faHeart} />
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
            <IconButton label='Sign Up' url='signup' icon={faUser} />
            <IconButton label='Browse' url='ruins' icon={faBook} />
            <IconButton label='Login' url='login' icon={faLogin} />
        </div>  
    </div>
    )
}

const mapStateToProps = (state) => {
    return{
        loggedIn: state.auth.loggedIn,
        username: state.auth.username
    };
}

export default connect(mapStateToProps)(HomePage);