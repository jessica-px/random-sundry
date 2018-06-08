import React from 'react';

const SubmitButton = (props) => (
    <button 
        //type='submit' 
        className='button button--login ripple' 
        //value={props.label}
    >
        {props.label}
    </button>
)

export default SubmitButton;