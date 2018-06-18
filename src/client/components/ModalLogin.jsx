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
            Sorry, you need an account to use this feature.
        </div>
        <div className="modalButtonWrapper">
            <span className='modalButton modalButton--plain' onClick={this.props.hideModal}>CLOSE</span>
            <Link to='/signup' className='modalButton modalButton--box'>
                SIGN UP
            </Link>
        </div>
    </ReactModal>
      
    )
  }
}

export default ModalLogin;