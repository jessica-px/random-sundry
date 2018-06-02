import React from 'react';
import FontAwesome from '@fortawesome/react-fontawesome';
import faUser from '@fortawesome/fontawesome-free-solid/faUser';

class AccountButton extends React.Component{
    state = {

    }

    handleClick = (e) => {
        // TO-DO: Show dropdown menu
    }


    render(){
        return(
         
    
            <div onClick={this.handleClick} className='navIcon navButton ripple'>
                <FontAwesome icon={faUser} />
            </div>
        
     

        )
    
    }
}

export default AccountButton;