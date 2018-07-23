import React from 'react';
import FontAwesome from '@fortawesome/react-fontawesome';
import faClipboard from '@fortawesome/fontawesome-free-solid/faClipboard';
import ReactTooltip from 'react-tooltip';

class CopyButton extends React.Component{
    state = {
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
        e.target.classList.add('bounce');
        
        //Change Tooltip
        this.setState((prevState) => ({
            copied: true
        }))
        const reset = setTimeout(this.resetAnimation, 500, e.target);
    }

    // Resets "bounce" animation after 0.5 seconds
    resetAnimation = (target) => {
        target.classList.remove('bounce');
        
    }

    getTooltipText = () => {
        if (this.state.copied){
            return 'Copied'
        }
        else{
            return 'Copy'
        }
    }

    resetTooltipText = () => {
        this.setState((prevState) => ({
            copied: false
        }))
    }

    


    render(){
        return(
            <div>
                <span data-tip data-for='copy'>
                    <div onClick={this.handleClick} className='cardIcon'>
                            <FontAwesome icon={faClipboard} />
                    </div>
                </span>

                {/* On hover, show "Copy Text" / "Copied" tooltip*/}
                <ReactTooltip 
                    id='copy' 
                    effect='solid' 
                    delayshow={300} 
                    delayHide={300}
                    className='tooltipText'
                    getContent={this.getTooltipText}
                    afterHide={this.resetTooltipText}
                />

                
                
            </div>

        )
    
    }
}

export default CopyButton;