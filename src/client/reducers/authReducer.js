import {
  VALIDATE_TOKEN_BEGIN,
  VALIDATE_TOKEN_SUCCESS,
  VALIDATE_TOKEN_ERROR,
  SET_USERNAME
} from './../actions/authActions.js'

const initialState = {
  loggedIn: false,
  username: '',
  validating: false
}

export default function authReducer(state = initialState, action) {
  switch(action.type){
    case VALIDATE_TOKEN_BEGIN:
      return{
        ...state,
        validating: true
      };
    case VALIDATE_TOKEN_SUCCESS:
      return{
        ...state,
        validating: false,
        username: action.payload.username,
        loggedIn: true
      };
    case SET_USERNAME:
      return{
        ...state,
        validating: false,
        username: action.payload.username,
        loggedIn: true
      };
    default:
      return state;
  }
}
