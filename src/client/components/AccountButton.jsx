import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons/faUser';

class AccountButton extends React.Component{
  state = {

  }

  handleClick = (e) => {
      // TO-DO: Show dropdown menu
  }


  render(){
    return(
      

      <div onClick={this.handleClick} className='navIcon navButton ripple'>
          <FontAwesomeIcon icon={faUser} />
      </div>
  
  

    )
  
  }
}

export default (AccountButton);