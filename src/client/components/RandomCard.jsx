import React from 'react';
import FontAwesome from '@fortawesome/react-fontawesome';
import LikeButton from './LikeButton.jsx';
import CopyButton from './CopyButton.jsx';

const RandomCard = (props) => (
    <div className='card'>

        {/* Render header, if present */}
            {props.cardHeader &&
            <div className='CardHeader'>{props.cardHeader}</div>
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
        
        {/* Render fave / copy icons */}
        <div className='cardIcons'>
            <LikeButton />
            <CopyButton />
        </div>
        
    </div>
)

export default RandomCard;