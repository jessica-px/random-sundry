import React from 'react';
import ReactModal from 'react-modal';

class ModalInfo extends React.Component{
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
            {this.props.text}
        </div>
        <div className="modalButtonWrapper">
            <span className='modalButton modalButton--plain' onClick={this.props.hideModal}>CLOSE</span>
        </div>
    </ReactModal>
      
    )
  }
}

export default ModalInfo;