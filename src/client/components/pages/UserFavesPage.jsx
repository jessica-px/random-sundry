import React from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router'
import FavesPanel from './../FavesPanel.jsx';


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
    const noFaves = faveData.length === 0 ? true : false;
    let filteredFaves = faveData;
    if (this.state.filter !== ''){
      // Perform another function that filters array
      // and returns new filteredFaves
    }

    this.setState(() => ({
      userFaves: faveData,
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
        <div>Show All</div>
      </div>

      <div className="favesPanelWrapper">
      
        {this.state.filteredFaves.map((fave) => 
          <FavesPanel {...fave} key={fave.id} />
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