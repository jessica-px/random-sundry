import React from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router'
import FavesPanel from './../FavesPanel.jsx';
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
    if (this.state.filter !== ''){
      // Perform another function that filters array
      // and returns new filteredFaves
    }
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
  
  render(){
    return(
        
    <div className="favesPageWrapper">

      {/* Redirects to home page if user is not logged in & not waiting on validation */}
      {(!this.props.loggedIn && !this.props.validating) &&  <Redirect to="/"/>}

      <div className="favesHeader">
        <div className="favesTitle">My Favorites</div>
        <div className="favesFilter">Show All <FontAwesome icon={faChevronDown} size='xs'/></div>
      </div>

      <div className="favesPanelWrapper">

        {this.state.filteredFaves.map((fave) => 
          <FavesPanel {...fave} key={fave.id} removeFunc={this.removeFaveFromList}/>
        )}
      
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