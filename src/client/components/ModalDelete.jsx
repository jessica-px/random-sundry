import React from 'react';
import ReactModal from 'react-modal';

class ModalDelete extends React.Component{
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
            {this.props.question}
        </div>
        <div className="modalButtonWrapper">
            <span className='modalButton modalButton--plain' onClick={this.props.hideModal}>CANCEL</span>
            <span className='modalButton modalButton--box modalButton--red' onClick={this.props.deleteFunc}>DELETE</span>
        </div>
    </ReactModal>
      
    )
  }
}

export default ModalDelete;