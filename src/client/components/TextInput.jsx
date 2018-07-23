import React from 'react';
import FontAwesome from '@fortawesome/react-fontawesome';
import faEye from '@fortawesome/fontawesome-free-solid/faEye';
import faEyeSlash from '@fortawesome/fontawesome-free-solid/faEyeSlash';

class TextInput extends React.Component{
  state = {
    value: '',
    labelClass: 'floatLabel',
    wrapperClass: 'textInputWrapper',
    hidden: false
  }

  // Sets password to 'hidden' by default for desktop, 'visible' for mobile
  componentWillMount(){
    if (this.props.password){
      this.setState(() => ({
        hidden: !isMobileDevice()
      }))
    }
  }

  // On focus, animates underline & moves up floating label
  onFocus = () => {
    this.setState(() => ({
      labelClass: 'floatLabel floatLabel--up',
      wrapperClass: 'textInputWrapper textInputWrapper--focus'
    }))
  }

  // On blur, resets underline
  onBlur = () => {
    this.setState(() => ({
      wrapperClass: 'textInputWrapper'
    }))
    // If text field is empty, resets floating label 
    if (this.state.value === ''){
      this.setState(() => ({
        labelClass: 'floatLabel',
      }))
    }
  }

  // Some basic validation
  onInputChange = (e) => {
    const newValue = e.target.value;
    if (newValue.indexOf(' ') !== -1){
      return;
    }
    this.changeValue(newValue);
    
  }

  changeValue = (newValue) => {
    this.setState((prevState) => ({
      value: newValue
    }))
    this.props.clearErrorMsg();
  }

  // Toggles hidden/visible
  toggleHidden = () => {
    this.setState((prevState) => ({
      hidden: !prevState.hidden
    }))
  }

  render(){
    return(
      <div className={this.state.wrapperClass}>
        {/* Render leading icon if given in props */}
        {this.props.icon && 
          <FontAwesome icon={this.props.icon} className='inputIcon'/>
        }
        <span className='floatLabelWrapper'>
          {/* Floating Label */}
          <label className={this.state.labelClass}>{this.props.name}</label>
          {/* Input Field */}
          <input 
            type={this.state.hidden ? 'password' : 'text'}
            className='textInput'
            name={this.props.name}
            maxLength={this.props.max}
            value={this.state.value}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            onChange={this.onInputChange}
            //required
            > 
          </input>
        </span> 
        {/* Render hide/show button if given 'password' prop */}
        {(this.props.password) &&
          (
          this.state.hidden ?
          <FontAwesome icon={faEye} className='inputIcon inputIcon--button' onClick={this.toggleHidden}/> :
          <FontAwesome icon={faEyeSlash} className='inputIcon inputIcon--button' onClick={this.toggleHidden}/>
          )
        }

      </div>
    )
  }
}

export default TextInput;


// Detects user device
const isMobileDevice = () => {
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};