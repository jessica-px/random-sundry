import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown} from '@fortawesome/pro-light-svg-icons/faChevronDown';
import {faChevronUp} from '@fortawesome/pro-light-svg-icons/faChevronUp';
import CopyButton from './CopyButton.jsx';
import DeleteButton from './DeleteButton.jsx';

class FavesPanel extends React.Component{
  state = {
    expanded: false
  }

  UNSAFE_componentDidReceiveProps(){
    this.setState({
      expanded: false
    })
  }

  toggleExpand = () => {
    this.setState((prevState) => ({
      expanded: !prevState.expanded
    }))
  }

  deleteFave = () => {
    console.log('Deleting ' + this.props.header)
    const url = '/api/faves';
    fetch(url, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({id: this.props.id})
    }).then(() => {
      this.props.removeFunc(this.props.id);
    }).catch((err) => {
      console.log(err);
    })
  }


  render(){
    return(
      <div className="favesPanel" id={this.props.id}>
        <div className="favesPanel__label" onClick={this.toggleExpand}>
          <span>{this.props.header}</span>
          {!this.state.expanded && <FontAwesomeIcon icon={faChevronDown} size='1x'/>}
          {this.state.expanded && <FontAwesomeIcon icon={faChevronUp} size='1x'/>}
        </div>  

        {this.state.expanded && expandedPanelBody(this.deleteFave, this.props)}
      </div>
      
      
    )
  }
}

// TO-DO: Prevent "copy" function from copying its own text!

const expandedPanelBody = (deleteFave, props) => {
  return(
    <div className="favesPanel__body">
      {props.subheader && <div className='smallCardHeader'>{props.subheader}</div>}
      <div className='cardBody'>
        {props.body.map((paragraph, index) => 
          <p key={index}>{paragraph}</p>
        )}
      </div>
      <div className='cardIconWrapper'>
        <CopyButton copyDivId={props.id}/>
        <DeleteButton faveId={props.id} faveLabel={props.header} onDelete={deleteFave}/>
      </div>
    </div>
  )
}


export default FavesPanel;