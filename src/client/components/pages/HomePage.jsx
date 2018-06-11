import React from 'react';
import NavBar from './../NavBar.jsx';
import {connect} from 'react-redux';

const HomePage = (props) => (
    <div>
        <div className='pageTitle'>Home Page</div>
        This is where home page information will go. Later.
        {props.loggedIn && <p>Hello, {props.username}.</p>}
        {props.loggedIn ? <p>LOGGED IN</p> : <p>NOT LOGGED IN</p>}
    </div>
)

const mapStateToProps = (state) => {
    return{
        loggedIn: state.auth.loggedIn,
        username: state.auth.username
    };
}

export default connect(mapStateToProps)(HomePage);