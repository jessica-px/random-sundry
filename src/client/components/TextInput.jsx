import React from 'react';
import FontAwesome from '@fortawesome/react-fontawesome';

class TextInput extends React.Component{
  state = {
    liked: false
  }

  render(){
    return(
      <div className='textInputArea'>
        {/* Render leading icon if given in props */}
        {this.props.icon && 
          <FontAwesome icon={this.props.icon} className='inputIcon'/>
        }
        <input 
          type='text' 
          className='textInput'
          name={this.props.name}
          maxLength={this.props.max}
          placeholder={this.props.name}
          autoFocus={this.props.focus}
          required
          > 
        </input>
      </div>
    )

  }
}

export default TextInput;