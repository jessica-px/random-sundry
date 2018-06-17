import React from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router'
import FavesPanel from './../FavesPanel.jsx';
import FavesFilter from './../FavesFilter.jsx';
import FontAwesome from '@fortawesome/react-fontawesome';
import faChevronDown from '@fortawesome/fontawesome-pro-light/faChevronDown';


class UserFavesPage extends React.Component{
  constructor(props){
    super(props);
    this.getFavesFromDB();
  }

  state = {
    filter: '',
    userFaves: [],
    filteredFaves: [],
    noFaves: false
  }

  getFavesFromDB = () => {
    const url = '/api/faves';
    fetch(url, {
      method: 'GET',
      credentials: 'include', // sends session token
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      response.json().then((faveData) =>{
        this.setFaves(faveData);
      });
    }).catch((err) => {
      console.log(err);
    })
  }

  setFaves = (faveData) => {
    let filteredFaves = faveData.reverse();
    // if (this.state.filter !== ''){
    //   // Perform another function that filters array
    //   // and returns new filteredFaves
    // }
    const noFaves = filteredFaves.length === 0 ? true : false;
    this.setState(() => ({
      userFaves: faveData,
      filteredFaves,
      noFaves,
    }))
  }

  removeFaveFromList = (id) => {
    const userFaves = this.state.userFaves.filter((fave) => fave.id !== id);
    const filteredFaves = this.state.filteredFaves.filter((fave) => fave.id !== id);
    const noFaves = filteredFaves.length === 0 ? true : false;
    this.setState(() => ({
      userFaves,
      filteredFaves,
      noFaves,
    }))
  }

  setFilter = (filter) => {
    let noFaves = false;
    let filteredFaves = this.getFilteredFaves(filter);
    filteredFaves.length === 0 ? noFaves = true : noFaves = false;
    this.setState(() => ({
      filter,
      filteredFaves,
      noFaves
    }))
  }

  getFilteredFaves = (filter) => {
    // If 'Show All', return all faves
    const allFaves = this.state.userFaves;
    if (filter == 'Show All'){
      return allFaves;
    }
    // Else only return faves with matching category or subcategory
    else{
      return allFaves.filter((fave) => 
      fave.category === filter || fave.subcategory === filter
    )
    }
    
    
  }
  
  render(){
    return(
        
    <div className="favesPageWrapper">

      {/* Redirects to home page if user is not logged in & not waiting on validation */}
      {(!this.props.loggedIn && !this.props.validating) &&  <Redirect to="/"/>}

      <div className="favesHeader">
        <div className="favesTitle">My Favorites</div>
        <FavesFilter setFilter={this.setFilter}/>
      </div>

      <div className="favesPanelWrapper">

        {/* map faves to FavesPanels */}
        {!this.state.noFaves && this.state.filteredFaves.map((fave) => 
          <FavesPanel {...fave} key={fave.id} removeFunc={this.removeFaveFromList}/>
        )}

        {/* if no faves to present, show message  */}
        {this.state.noFaves &&
          <p>There's nothing here!</p>
        }
      
      </div>

    </div>

      
    )
  }
}

const mapStateToProps = (state) => {
  return{
    loggedIn: state.auth.loggedIn,
    validating: state.auth.validating
  };
}

export default connect(mapStateToProps)(UserFavesPage);