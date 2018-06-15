import React from 'react';
import FontAwesome from '@fortawesome/react-fontawesome';
import faHeart from '@fortawesome/fontawesome-free-solid/faHeart';

class LikeButton extends React.Component{
    state = {
        liked: false
    }

    componentWillReceiveProps(){
        this.setState(() => ({
            liked: false
        }))
    }

    handleClick = (e) => {
        const icon = e.target;

        // TO-DO: If not logged in, pop up a modal saying "you need to be logged in"
        // ALSO: A pop-up modal for nicknaming??

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

    // When "liked", render a bouncy red heart. When "unliked", return to grey heart.
    render(){
        return(
            <div onClick={this.handleClick} className='icon'>
                {this.state.liked &&
                    <FontAwesome icon={faHeart} className='icon--red bounce'/>
                }
                {!this.state.liked &&
                    <FontAwesome icon={faHeart} />
                }
                

            </div>
        )
    
    }
}

export default LikeButton;