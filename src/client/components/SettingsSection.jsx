import React from 'react';
import TextInput from './TextInput.jsx';
import SubmitButton from './SubmitButton.jsx';
import Button from './Button.jsx';

const SettingsSection = (props) => (
    <div className="settingsSectionWrapper">
    <div className="settingsTitle">{props.title}</div>
    {props.text && <div className="settingsSectionText">{props.text}</div>}
    
    <form onSubmit={props.onFormSubmit} className='settingsForm'>
        {props.input1 && <TextInput name={props.input1} max={256} icon={props.inputIcon1} wrapperClass='settingsInput' colorClass='bgInput'/>}
        {props.input2 && <TextInput name={props.input2} max={256} icon={props.inputIcon2} wrapperClass='settingsInput' colorClass='bgInput'/>}
        {props.submitButton && <SubmitButton label={props.submitButton} className='settingsSubmitButton'/>}
        {props.deleteButton && <SubmitButton label='Delete Account' className='settingsSubmitButton ripple--red'/>}
    </form>
</div>
)

export default SettingsSection;