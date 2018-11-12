import React from 'react';
import TextInput from './TextInput.jsx';
import SubmitButton from './SubmitButton.jsx';

class SettingsSection extends React.Component{
    state = {
      errorMessage:''
    }

    clearErrorMessage = () => {
      this.setState(() => ({
        errorMessage: ''
      }))
    }
    
    setErrorMessage = (msg) => {
      this.setState(() => ({
        errorMessage: msg
      }))
    }

    render(){
      return(
        <div className="settingsSectionWrapper">
          <div className="settingsTitle">{this.props.title}</div>
          {this.props.text && <div className="settingsSectionText">{this.props.text}</div>}
            
          <form onSubmit={this.props.onFormSubmit(this.setErrorMessage)} className='settingsForm'>
            {(this.props.input1 && this.props.email) && <TextInput name={this.props.input1} max={256} type='email' icon={this.props.inputIcon1} clearErrorMsg={this.clearErrorMessage} wrapperClass='settingsInput' colorClass='bgInput'/>}
            {(this.props.input1 && !this.props.email) && <TextInput name={this.props.input1} max={256} icon={this.props.inputIcon1} clearErrorMsg={this.clearErrorMessage} password={this.props.password} wrapperClass='settingsInput' colorClass='bgInput'/>}
            {this.props.input2 && <TextInput name={this.props.input2} max={256} icon={this.props.inputIcon2} clearErrorMsg={this.clearErrorMessage} password={this.props.password} wrapperClass='settingsInput' colorClass='bgInput'/>}
            {this.props.input1 && <div className='inputMessage settingsInputError'>{this.state.errorMessage}</div>}
            {this.props.submitButton && <SubmitButton label={this.props.submitButton} className='settingsSubmitButton'/>}
            {this.props.deleteButton && <SubmitButton label='Delete Account' className='settingsSubmitButton ripple--red'/>}
          </form>
        </div>
      )
    }
}

export default SettingsSection;