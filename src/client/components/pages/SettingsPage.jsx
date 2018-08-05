import React from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router'
import faMail from '@fortawesome/fontawesome-pro-light/faEnvelope';
import faLock from '@fortawesome/fontawesome-pro-light/faLock';
import { setEmail } from '../../actions/authActions';

import SettingsSection from '../SettingsSection.jsx';
import ModalInfo from '../ModalInfo.jsx';

class SettingsPage extends React.Component{
    state = {
        showModal: false,
        modalText: '',

    }

    toggleModal = (e) => {
        this.setState((prevState) => ({
          showModal: !prevState.showModal
        }))
      }

    // ------------------------
    //  Email
    // ------------------------

    saveEmail = setErrorMsg => e =>  {
        e.preventDefault();
        const emailInfo = {newEmail: e.target[0].value};
        this.sendEmailToServer(emailInfo,setErrorMsg);
    }

    sendEmailToServer = (emailInfo, setErrorMsg) => {
        const url = '/auth/change-email';
        console.log('Submitting email: ' + emailInfo.newEmail);
        fetch(url, {
          method: 'POST',
          credentials: 'include', // necessary for storing session cookies
          headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json'
          },
          body: JSON.stringify(emailInfo)
        }).then((res) => {
          return res.json();
        }).then((info) => {
          this.changeEmailResult(info, emailInfo.newEmail, setErrorMsg);
        })
    }

    changeEmailResult = (info, newEmail, setErrorMsg) => {
        if (info.success){
            // 'Show success modal'
            this.setState(() => ({
                modalText: 'Email has been changed.',
                showModal: true
            }))
            this.props.dispatch(setEmail(newEmail));
            console.log(info.success);
        }
        else if (info.message){
            if (info.message === 'Missing credentials'){
                setErrorMsg('Error: Make sure you are logged in.');
            }
            else{
                setErrorMsg(info.message);
            }
        }
    }

    // ------------------------
    //  Password
    // ------------------------

    changePassword = setErrorMsg => e => {
        e.preventDefault();
        const info = {
            username: this.props.username,
            currPassword: e.target[0].value,
            newPassword: e.target[1].value
        }
        if (!info.currPassword || !info.newPassword ){
            setErrorMsg('Both fields are required.');
        }
        else if (info.newPassword.length < 8){
            setErrorMsg('New password must be at least 8 characters.');
        }
        this.checkPassword(info, setErrorMsg);
    }

    checkPassword = (passwordInfo, setErrorMsg) => {
        const url = '/auth/changepassword';
        console.log('Submitting form: '+ JSON.stringify(passwordInfo));
        fetch(url, {
          method: 'POST',
          credentials: 'include', // necessary for storing session cookies
          headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json'
          },
          body: JSON.stringify(passwordInfo)
        }).then((res) => {
          return res.json();
        }).then((info) => {
          this.changePasswordResult(info, setErrorMsg);
        })
    }

    changePasswordResult = (info, setErrorMsg) => {
        if (info.success){
            // 'Show success modal'
            this.setState(() => ({
                modalText: 'Password has been changed.',
                showModal: true
            }))
            console.log(info.success);
        }
        else if (info.message){
            if (info.message === 'Missing credentials'){
                setErrorMsg('Incorrect password.');
            }
            else{
                setErrorMsg(info.message);
            }
        }
    }

    // ------------------------
    //  Delete Account
    // ------------------------

    deleteAccount = setErrorMsg => e => {
        e.preventDefault();
        console.log('Really delete your account?');
    }

    // ------------------------
    //  Render
    // ------------------------

    render(){
        return(

        <div className='settingsPageWrapper'>
            {/* Redirects to home page if user is not logged in & not waiting on validation */}
            {(!this.props.loggedIn && !this.props.validating) &&  <Redirect to="/"/>}

            {/* 'Are you sure you want to Delete?' modal */}
            {this.state.showModal &&
                <ModalInfo
                    isOpen={this.state.showModal}
                    text={this.state.modalText}
                    hideModal={this.toggleModal} 
                />
            }
        
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
                password={true}
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
        email: state.auth.email
    };
}

export default connect(mapStateToProps)(SettingsPage);