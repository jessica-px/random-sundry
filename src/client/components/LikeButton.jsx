import React from 'react';
import {connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons/faHeart';
import uuid from 'uuid/v1';
import ModalLogin from './ModalLogin.jsx';

class LikeButton extends React.Component{
  state = {
    liked: false,
    id: ''
  }

  // resets "liked" state whenever RandomCard sends in new props
  componentDidReceiveProps(){
    this.setState(() => ({
      liked: false,
      showModal: false
    }))
  }

  toggleModal = () => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal
    }))
  }

  handleClick = () => {
    if (this.state.liked){
      this.unlikeFave();
    }
    else{
      this.likeFave();
    }
  }

  unlikeFave = () => {
    this.removeFromFaves();
    this.setState({
      liked: false
    })
  }

  likeFave = () => {
    // If not logged in, show modal
    if (!this.props.loggedIn){
      this.toggleModal();
    }
    // Else, change heart and save fave
    else{
      this.addToFaves();
      this.setState({
        liked: true
      })
    }
  }

  addToFaves = () => {
    const url = '/api/faves'
    let newFaveJson = {...this.props};
    newFaveJson.id = uuid(); // add unique ID, for retrieval and to prevent duplicate posts
    this.setState(() => ({id: newFaveJson.id})) // saves ID to state, for un-faving
    console.log('Liking:')
    console.log(newFaveJson)

    fetch(url, {
      method: 'POST',
      credentials: 'include', // sends session token
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFaveJson)
    }).then((res) => {
      return res;
    })
  }

  removeFromFaves = () => {
    const url = '/api/faves';
    console.log('Deleting fave with ID:' + this.state.id)
    fetch(url, {
      method: 'DELETE',
      credentials: 'include', // sends session token
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({id: this.state.id})
    }).then((res) => {
      this.setState({id: ''}); // reset id
      return res;
    })
  }

  // When "liked", render a bouncy red heart. When "unliked", return to grey heart.
  render(){
    return(
      <div>
        {/* 'you must be logged in' modal */}
        {this.state.showModal &&
          <ModalLogin 
            isOpen={this.state.showModal}
            hideModal={this.toggleModal} 
          />
        }

        {/* button */}
        <div onClick={this.handleClick} className='cardIcon'>
          {this.state.liked &&
            <FontAwesomeIcon icon={faHeart} className='cardIcon--red bounce'/>
          }
          {!this.state.liked &&
            <FontAwesomeIcon icon={faHeart} />
          }
        </div>
      </div>
    )
  
  }
}

const mapStateToProps = (state) => {
  return{
    loggedIn: state.auth.loggedIn
  };
}

export default connect(mapStateToProps)(LikeButton);