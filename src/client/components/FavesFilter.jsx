import React from 'react';
import SelectDropdown from './SelectDropdown.jsx';

class FavesFilter extends React.Component{
  handleClick = (e) => {
    this.props.setFilter(selected);
  }

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