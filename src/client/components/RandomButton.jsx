import React from 'react';

const RandomButton = (props) => (
    <div className='button button--big ripple' onClick={props.onClick}>
        Randomize
    </div>
)

export default RandomButton;