import React from 'react';
import FontAwesome from '@fortawesome/react-fontawesome';
import LikeButton from './LikeButton.jsx';
import CopyButton from './CopyButton.jsx';

const RandomCard = (props) => (
    <div className='card generatorCard'>
        <div id="cardText">
            {/* Render header, if present */}
                {props.cardHeader &&
                <div className='cardHeader'>{props.cardHeader}</div>
            }

            {/* Render small header, if present */}
            {props.cardHeaderSmall &&
                <div className='smallCardHeader'>{props.cardHeaderSmall}</div>
            }
            
            {/* Render each string in 'cardBody' as its own paragraph */}
            <div className='cardBody'>
                {props.cardBody.map((paragraph, index) => 
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