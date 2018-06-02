import React from 'react';
import FontAwesome from '@fortawesome/react-fontawesome';
import faClipboard from '@fortawesome/fontawesome-free-solid/faClipboard';

class CopyButton extends React.Component{
    state = {
        toggleAnimation: false
    }

    handleClick = (e) => {
        // show tooltip
        // and actually copy the text, somehow
        this.setState((prevState) => ({
            toggleAnimation: !prevState.toggleAnimation
        }))
    }

    // When "liked", render an animated heart
    render(){
        return(
            <div onClick={this.handleClick} className='icon'>
   
                <FontAwesome icon={faClipboard} />

            </div>
        )
    
    }
}

export default CopyButton;