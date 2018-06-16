import React from 'react';
import FontAwesome from '@fortawesome/react-fontawesome';
import LikeButton from './LikeButton.jsx';
import CopyButton from './CopyButton.jsx';

const RandomCard = (props) => (
    <div className='card generatorCard'>
        <div id="cardText">
            {/* Render header, if present */}
                {props.header &&
                <div className='cardHeader'>{props.header}</div>
            }

            {/* Render small header, if present */}
            {props.subheader &&
                <div className='smallCardHeader'>{props.subheader}</div>
            }
            
            {/* Render each string in 'body' as its own paragraph */}
            <div className='cardBody'>
                {props.body.map((paragraph, index) => 
                    <p key={index}>{paragraph}</p>
                )}
            </div>
        </div>
        
        {/* Render fave / copy icons */}
        <div className='cardIconWrapper'>
            <LikeButton {...props}/>
            <CopyButton copyDivId='cardText'/>
        </div>
        
    </div>
)

export default RandomCard;