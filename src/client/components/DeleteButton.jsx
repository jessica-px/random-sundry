import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons/faTrashAlt';
import ModalDelete from './ModalDelete.jsx';

class DeleteButton extends React.Component{

  state = {
    showModal: false
  }

  toggleModal = () => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal
    }))
  }

  delete = () => {
    this.props.onDelete();
    this.toggleModal();
  }

  render(){
    return(
      <div>
        {/* 'Are you sure you want to Delete?' modal */}
        {this.state.showModal &&
          <ModalDelete 
            isOpen={this.state.showModal}
            question={'Delete ' + this.props.faveLabel + '?'}
            hideModal={this.toggleModal} 
            deleteFunc={this.delete}
          />
        }

        {/* Button */}
        <span data-tip data-for='delete'>
          <div onClick={this.toggleModal} 
            className='cardIcon' 
          >
            <FontAwesomeIcon icon={faTrashAlt} />
          </div>
        </span>

      </div>

    )
  
  }
}

export default DeleteButton;