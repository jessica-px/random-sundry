import React from 'react';
import FontAwesome from '@fortawesome/react-fontawesome';
import faClipboard from '@fortawesome/fontawesome-free-solid/faClipboard';
import ReactTooltip from 'react-tooltip';

class CopyButton extends React.Component{
    state = {
        toggleAnimation: false,
        copied: false,
    }

    copyToClipboard = () => {
        const range = document.getSelection().getRangeAt(0);
        range.selectNode(document.getElementById(this.props.copyDivId));
        const selection = window.getSelection();
        selection.removeAllRanges();   
        selection.addRange(range);
        document.execCommand("copy");
    }

    handleClick = (e) => {
        //Copy Text
        this.copyToClipboard();
        // Bounce icon
        if (this.state.copied === false){
            e.target.classList.add('bounce');
        }
        //Change Tooltip
        this.setState((prevState) => ({
            toggleAnimation: !prevState.toggleAnimation,
            copied: true
        }))
        const reset = setTimeout(this.resetTooltip, 1500, e.target);
    }

    // Resets "copied" tooltip after 1.5 seconds
    resetTooltip = (target) => {
        target.classList.remove('bounce');
        this.setState((prevState) => ({
            copied: false
        }))
    }


    render(){
        return(
            <div>
                <span data-tip data-for='copy'>
                    <div onClick={this.handleClick} 
                        className='cardIcon' 
                        data-tip data-for='copied'
                        >
                            <FontAwesome icon={faClipboard} />
                    </div>
                </span>

                {/* On hover, show "Copy Text" tooltip. On click, show "Copied" temporarily*/}
                <ReactTooltip id='copy' effect='solid' delayShow={150} delayHide={300}>
                    {!this.state.copied &&   
                            <span>Copy Text</span>
                    }
                    {this.state.copied && 
                            <span>Copied</span>
                    }
                </ReactTooltip>
                
            </div>

        )
    
    }
}

export default CopyButton;