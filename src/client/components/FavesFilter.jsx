import React from 'react';
import SelectDropdown from './SelectDropdown.jsx';

class FavesFilter extends React.Component{
  render(){
    return(
      <SelectDropdown 
        parentFunc={this.props.setFilter}
        options={['Show All', 'People', 'Places', 'Things']}
      />
    )
  }
}

export default FavesFilter;