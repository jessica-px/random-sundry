import React from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router'
import faMail from '@fortawesome/fontawesome-pro-light/faEnvelope';
import faLock from '@fortawesome/fontawesome-pro-light/faLock';
import { setEmail } from '../../actions/authActions';

import { setLoggedOut } from '../../actions/authActions';
import SettingsSection from '../SettingsSection.jsx';
import ModalInfo from '../ModalInfo.jsx';
import ModalDeleteAcc from '../ModalDeleteAcc.jsx';

class SettingsPage extends React.Component{
    state = {
        showInfoModal: false,
        showDeleteModal: false,
        modalText: '',

    }

    toggleInfoModal = (e) => {
        this.setState((prevState) => ({
            showInfoModal: !prevState.showInfoModal
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
                showInfoModal: true
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
                showInfoModal: true
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

    settingsToggleDeleteModal = setErrorMsg => e => {
        e.preventDefault();
        console.log('SETTINGS toggling delete modal')
        this.setState((prevState) => ({
            showDeleteModal: !prevState.showDeleteModal
        }))
      }

    toggleDeleteModal = () => {
        console.log('toggling delete modal')
        this.setState((prevState) => ({
            showDeleteModal: !prevState.showDeleteModal
        }))
      }


    deleteAccount = () => {
        console.log('Sending delete request...');
        fetch('/auth/delete-account', {
            method: 'GET',
            credentials: 'include',
            headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json'
            }
        }).then((res) => {
            this.props.dispatch(setLoggedOut());
            console.log('Done fetching');
        }) 
    }

    // ------------------------
    //  Render
    // ------------------------

    render(){
        return(

        <div className='settingsPageWrapper'>
            {/* Redirects to home page if user is not logged in & not waiting on validation */}
            {(!this.props.loggedIn && !this.props.validating) &&  <Redirect to="/"/>}

            {/* Informational modal */}
            {this.state.showInfoModal &&
                <ModalInfo
                    isOpen={this.state.showInfoModal}
                    text={this.state.modalText}
                    hideModal={this.toggleInfoModal} 
                />
            }

            {/* "Are you sure you want to delete?" modal */}
            {this.state.showDeleteModal &&
                <ModalDeleteAcc
                    isOpen={this.state.showDeleteModal}
                    question='Are you sure you want to delete your account?'
                    hideModal={this.toggleDeleteModal} 
                    deleteFunc={this.deleteAccount}
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
                    <span>{this.props.email == null ? 'None' : this.props.email}</span>
                    </div>
            </div>

            {/* Change Email */}
            <SettingsSection
                title='Change Email'
                text='Emails are only used for password recovery. We will not send you any other emails.'
                onFormSubmit={this.saveEmail}
                input1='New Email'
                inputIcon1={faMail}
                email='true'
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
                onFormSubmit={this.settingsToggleDeleteModal}
                deleteButton={true}
            />
            

        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        loggedIn: state.auth.loggedIn,
        validating: state.auth.validating,
        username: state.auth.username,
        email: state.auth.email
    };
}

export default connect(mapStateToProps)(SettingsPage);