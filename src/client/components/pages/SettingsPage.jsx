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

const SettingsPage = (props) => (
  <div className='settingsPageWrapper'>
 
    {/* Details */}
    <div className="settingsSectionWrapper">
        <div className="settingsTitle">Account Details</div>
        <div className="settingsDetail">
            <span className='greyFont'>Username:</span> 
            <span>{props.username}</span>
            </div>
        <div className="settingsDetail">
            <span className='greyFont'>Email:</span>
            <span>{props.email}</span>
            </div>
    </div>

    {/* Change Email */}
    <div className="settingsSectionWrapper">
        <div className="settingsTitle">Change Email</div>
        <div className="settingsSectionText">Emails are only used for password recovery. We will not send you any other emails.</div>
        
        <form onSubmit='' className='settingsForm settingsForm--vertical'>
            <TextInput name='New Email' max={256} icon={faMail} wrapperClass='settingsInput' colorClass='bgInput'/>
            <SubmitButton label='Save Email' className='settingsSubmitButton settingsSubmitButton--right'/>
        </form>
    </div>

    {/* Change Password */}
    <div className="settingsSectionWrapper">
        <div className="settingsTitle">Change Password</div>
   
        <form onSubmit='' className='settingsForm'>
            <TextInput name='Current Password' max={256} icon={faLock} password={true} wrapperClass='settingsInput' colorClass='bgInput'/>
            <TextInput name='New Password' max={256} icon={faLock} password={true} wrapperClass='settingsInput' colorClass='bgInput'/>
            <SubmitButton label='Save Password' className='settingsSubmitButton'/>
        </form>
    </div>
    {/* Delete Account */}
    <div className="settingsSectionWrapper">
        <div className="settingsTitle">Delete Account</div>
        <div className="settingsSectionText">
        This will permanently remove all of your account information from our database.</div>
   
        <form onSubmit='' className='settingsForm'>
            <Button label='Delete Account' className='settingsSubmitButton ripple--red'/>
        </form>
    </div>
    


  </div>
)

const mapStateToProps = (state) => {
    return{
        loggedIn: state.auth.loggedIn,
        username: state.auth.username,
        email: 'testjess2018@longdomain.com'
    };
}

export default connect(mapStateToProps)(SettingsPage);