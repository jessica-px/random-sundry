import React from 'react';

const BigButton = (props) => (
    <div className={'button button--big ripple '+ props.className} onClick={props.onClick}>
        {props.label}
    </div>
)

export default BigButton;