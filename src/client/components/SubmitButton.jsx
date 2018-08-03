import React from 'react';

const SubmitButton = (props) => (
    <button 
        //type='submit' 
        className={'button ripple ' + props.className}
        //value={props.label}
    >
        {props.label}
    </button>
)

export default SubmitButton;