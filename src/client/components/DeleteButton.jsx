import React from 'react';
import FontAwesome from '@fortawesome/react-fontawesome';
import faClipboard from '@fortawesome/fontawesome-free-solid/faTrashAlt';
import ReactTooltip from 'react-tooltip';
import ModalDelete from './ModalDelete.jsx';

class DeleteButton extends React.Component{

  state = {
    showModal: false
  }

  toggleModal = (e) => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal
    }))
  }

  delete = (id) => {
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
                <FontAwesome icon={faClipboard} />
            </div>
        </span>

      </div>

    )
  
  }
}

export default DeleteButton;