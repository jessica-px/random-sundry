import React from 'react';
import {connect} from 'react-redux';
import FontAwesome from '@fortawesome/react-fontawesome';
import faUser from '@fortawesome/fontawesome-pro-light/faUser';
import faMail from '@fortawesome/fontawesome-pro-light/faEnvelope';
import faLock from '@fortawesome/fontawesome-pro-light/faLock';
import faWrench from '@fortawesome/fontawesome-pro-light/faWrench';
import { Link } from 'react-router-dom';
import TextInput from '../TextInput.jsx';
import SubmitButton from '../SubmitButton.jsx';
import Button from '../Button.jsx';
import { domainToASCII } from 'url';

import SettingsSection from '../SettingsSection.jsx';

class SettingsPage extends React.Component{
    state = {
      errorMessage: ''
    }

    saveEmail = (e) => {
        e.preventDefault();
        console.log('Saved email');
    }

    changePassword = (e) => {
        e.preventDefault();
        console.log('Changed password');
    }

    deleteAccount = (e) => {
        e.preventDefault();
        console.log('Really delete your account?');
    }

    render(){
        return(
        <div className='settingsPageWrapper'>
        
            {/* Details */}
            <div className="settingsSectionWrapper">
                <div className="settingsTitle">Account Details</div>
                <div className="settingsDetail">
                    <span className='greyFont'>Username:</span> 
                    <span>{this.props.username}</span>
                    </div>
                <div className="settingsDetail">
                    <span className='greyFont'>Email:</span>
                    <span>{this.props.email}</span>
                    </div>
            </div>

            {/* Change Email */}
            <SettingsSection
                title='Change Email'
                text='Emails are only used for password recovery. We will not send you any other emails.'
                onFormSubmit={this.saveEmail}
                input1='New Email'
                inputIcon1={faMail}
                submitButton='Save Email'
            />

            {/* Change Password */}
            <SettingsSection
                title='Change Password'
                onFormSubmit={this.changePassword}
                input1='Current Password'
                inputIcon1={faLock}
                input2='New Password'
                inputIcon2={faLock}
                submitButton='Save Password'
            />

            {/* Delete Account */}
            <SettingsSection
                title='Delete Account'
                text='This will permanently remove all of your account information from our database.'
                onFormSubmit={this.deleteAccount}
                deleteButton={true}
            />
            

        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        loggedIn: state.auth.loggedIn,
        username: state.auth.username,
        email: 'testjess2018@longdomain.com'
    };
}

export default connect(mapStateToProps)(SettingsPage);