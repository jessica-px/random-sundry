import React from 'react';
import { Route, Redirect } from 'react-router'
import FontAwesome from '@fortawesome/react-fontawesome';
import faChevronDown from '@fortawesome/fontawesome-pro-light/faChevronDown';
import faChevronUp from '@fortawesome/fontawesome-pro-light/faChevronUp';
import CopyButton from './CopyButton.jsx';

class FavesPanel extends React.Component{
  state = {
    expanded: false
  }

  toggleExpand = () => {
    this.setState((prevState) => ({
      expanded: !prevState.expanded
    }))
  }


  render(){
    return(
      <div className="favesPanel" id={this.props.id}>
        <div className="favesPanel__label" onClick={this.toggleExpand}>
          <span>{this.props.header}</span>
          {!this.state.expanded && <FontAwesome icon={faChevronDown} size='1x'/>}
          {this.state.expanded && <FontAwesome icon={faChevronUp} size='1x'/>}
        </div>  

        {this.state.expanded && expandedPanelBody(this.props)}
      </div>
      
      
    )
  }
}

// TO-DO: Pull text from props. Assign CopyButton to unique ID.

const expandedPanelBody = (props) => {
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
        </div>
    </div>
  )
}


export default FavesPanel;