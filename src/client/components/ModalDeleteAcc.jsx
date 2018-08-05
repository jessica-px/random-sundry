import React from 'react';
import ReactModal from 'react-modal';
import TextInput from './TextInput.jsx';
import SubmitButton from './SubmitButton.jsx';

class ModalDeleteAcc extends React.Component{
    constructor(props){
        super(props);
        ReactModal.setAppElement('#root');
    }

    clearErrorMessage = () => {
        // This input does not have any error message to clear
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted')
        const input = e.target[0].value;
        if (input==='DELETE'){
            console.log('Deleting account')
            this.props.hideModal();
            this.props.deleteFunc();
        }
        
    }

  render(){
    return(
    <ReactModal 
        isOpen={this.props.isOpen}
        className="card modal"
        overlayClassName='modalOverlay'
        onRequestClose={this.props.hideModal}
    >
        <div className='modalTitle--red'>
            {this.props.question}
        </div>
        {/* <div className='modalText'>
            {this.props.text}
        </div> */}
        <form onSubmit={this.handleSubmit}>
            <TextInput name='Type DELETE to confirm' max={20} clearErrorMsg={this.clearErrorMessage}/>
            <div className="modalButtonWrapper">
                <span className='modalButton modalButton--plain' onClick={this.props.hideModal}>CANCEL</span>
                <button className='button ripple--red modalButton modalButton--box modalButton--red'>DELETE</button>
            </div>
        </form>
    </ReactModal>
      
    )
  }
}

export default ModalDeleteAcc;