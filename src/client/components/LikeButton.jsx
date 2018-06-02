import React from 'react';
import FontAwesome from '@fortawesome/react-fontawesome';
import faHeart from '@fortawesome/fontawesome-free-solid/faHeart';

class LikeButton extends React.Component{
    state = {
        liked: false
    }

    handleClick = (e) => {
        const icon = e.target;
        // If previously liked, unlike
        if (this.state.liked){
            this.setState((prevState) => ({
                liked: false
            }))
        }
        // Else, like
        else{
            this.setState((prevState) => ({
                liked: true
            }))
        }

    }

    // When "liked", render an animated heart
    render(){
        return(
            <div onClick={this.handleClick} className='icon'>
                {this.state.liked &&
                    <FontAwesome icon={faHeart} className='icon--red bounce'/>
                }
                {!this.state.liked &&
                    <FontAwesome icon={faHeart}/>
                }
                

            </div>
        )
    
    }
}

export default LikeButton;