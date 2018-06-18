import React from 'react';
import ReactModal from 'react-modal';
import { Link } from 'react-router-dom'

class ModalLogin extends React.Component{
    constructor(props){
        super(props);
        ReactModal.setAppElement('#root');
    }

  render(){
    return(
    <ReactModal 
        isOpen={this.props.isOpen}
        className="card modal"
        overlayClassName='modalOverlay'
        onRequestClose={this.props.hideModal}
    >
        <div className='modalTitle'>
            Sorry, you must be logged in to use this feature.
        </div>
        <div className="modalButtonWrapper">
            <span className='modalButton' onClick={this.props.hideModal}>CLOSE</span>
            <Link to='/login' className='modalButton'>
                LOG IN
            </Link>
            <Link to='/signup' className='modalButton'>
                SIGN UP
            </Link>
        </div>
    </ReactModal>
      
    )
  }
}

export default ModalLogin;