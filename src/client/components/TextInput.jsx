import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEye} from '@fortawesome/free-solid-svg-icons/faEye';
import {faEyeSlash} from '@fortawesome/free-solid-svg-icons/faEyeSlash';

class TextInput extends React.Component{
  state = {
    value: '',
    labelClass: 'floatLabel',
    //wrapperClass: this.props.wrapperClass,
    currentWrapper: this.props.wrapperClass,
    //wrapperClass: 'textInputWrapper',
    hidden: false
  }

  static defaultProps = {
    wrapperClass: 'textInputWrapper',
    colorClass: 'whiteInput'
  }

  // Sets password to 'hidden' by default for desktop, 'visible' for mobile
  componentDidMount(){
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
      currentWrapper: this.props.wrapperClass + ' textInputWrapper--focus'
    }))
  }

  // On blur, resets underline
  onBlur = () => {
    this.setState(() => ({
      currentWrapper: this.props.wrapperClass
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
    this.setState({
      value: newValue
    })
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
      <div className={this.state.currentWrapper}>
        {/* Render leading icon if given in props */}
        {this.props.icon && 
          <FontAwesomeIcon icon={this.props.icon} className='inputIcon'/>
        }
        <span className='floatLabelWrapper'>
          {/* Floating Label */}
          <label className={this.state.labelClass}>{this.props.name}</label>
          {/* Input Field */}
          <input 
            type={this.state.hidden ? 'password' : 'text'}
            className={'textInput '+this.props.colorClass}
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
              <FontAwesomeIcon icon={faEye} className='inputIcon inputIcon--button' onClick={this.toggleHidden}/> :
              <FontAwesomeIcon icon={faEyeSlash} className='inputIcon inputIcon--button' onClick={this.toggleHidden}/>
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