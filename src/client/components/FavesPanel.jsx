import React from 'react';
import { Route, Redirect } from 'react-router'
import FontAwesome from '@fortawesome/react-fontawesome';
import faChevronDown from '@fortawesome/fontawesome-pro-light/faChevronDown';
import faChevronUp from '@fortawesome/fontawesome-pro-light/faChevronUp';
import CopyButton from './CopyButton.jsx';
import DeleteButton from './DeleteButton.jsx';

class FavesPanel extends React.Component{
  state = {
    expanded: false
  }

  toggleExpand = () => {
    this.setState((prevState) => ({
      expanded: !prevState.expanded
    }))
  }

  deleteFave = (e) => {
    console.log('Deleting ' + this.props.header)
    const url = '/api/delete-fave';
    fetch(url, {
      method: 'POST',
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({id: this.props.id})
    }).then((response) => {
      // After fetch, hide modal and remove fave from list
      //this.toggleModal();
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
          {!this.state.expanded && <FontAwesome icon={faChevronDown} size='1x'/>}
          {this.state.expanded && <FontAwesome icon={faChevronUp} size='1x'/>}
        </div>  

        {this.state.expanded && expandedPanelBody(this.deleteFave, this.props)}
      </div>
      
      
    )
  }
}

// TO-DO: Pull text from props. Assign CopyButton to unique ID.

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