import React from 'react';
import FontAwesome from '@fortawesome/react-fontawesome';
import LikeButton from './LikeButton.jsx';
import CopyButton from './CopyButton.jsx';

const RandomCard = (props) => (
    <div className='card'>
        <div className='smallCardHeader'>
            Shortsword, 1d6 piercing. Light, finesse.
        </div>
        <p>
            This is a shortsword with a thin, blackened blade. 
            It is engraved with a single rune.
        </p>    
        <p>
            Attacks with this weapon can deal Necrotic damage.
        </p>                
        <p>
            Rumor says it was once a gift for an orc warlord.
        </p>
        <LikeButton />
        <CopyButton />
    </div>
)

export default RandomCard;