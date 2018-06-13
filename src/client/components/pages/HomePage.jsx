import React from 'react';
import NavBar from './../NavBar.jsx';
import {connect} from 'react-redux';

const HomePage = (props) => (
    <div className="navShape">
 
        <div className="navTriangle">
            
        </div>
        <div className='homeGreeting'>
        {props.loggedIn && <p>Hi there, {props.username}!</p>}
        {!props.loggedIn && <p>Hi there!</p>}
        <p>
            This website hosts a collection of quick and snappy random generators
            for 5th Edition Dungeons and Dragons.
        </p>
        <p>
            Browse the generators as a guests, or sign up for an account so you 
            can save your favorite results!
        </p>
        </div>
        
        
        
        
    </div>
)

const mapStateToProps = (state) => {
    return{
        loggedIn: state.auth.loggedIn,
        username: state.auth.username
    };
}

export default connect(mapStateToProps)(HomePage);