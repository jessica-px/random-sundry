import React from 'react';
import FontAwesome from '@fortawesome/react-fontawesome';

class TextInput extends React.Component{
  state = {
    value: '',
    labelClass: 'floatLabel',
    wrapperClass: 'textInputWrapper'
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
            type='text' 
            className='textInput'
            name={this.props.name}
            maxLength={this.props.max}
            value={this.state.value}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            onChange={this.onInputChange}
            required
            > 
          </input>
        </span>
      </div>
    )

  }
}

export default TextInput;