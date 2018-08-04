import {
  VALIDATE_TOKEN_BEGIN,
  VALIDATE_TOKEN_SUCCESS,
  VALIDATE_TOKEN_ERROR,
  NO_TOKEN_FOUND,
  SET_LOGGED_OUT,
  SET_USERNAME,
  SET_EMAIL,
} from './../actions/authActions.js'

const initialState = {
  loggedIn: false,
  username: '',
  email: 'None',
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
        email: action.payload.email,
        loggedIn: true
      };
    case NO_TOKEN_FOUND:
      return{
        ...state,
        validating: false,
        loggedIn: false,
        username: '',
      };
    case SET_USERNAME:
      return{
        ...state,
        validating: false,
        username: action.payload.username,
        loggedIn: true
      };
    case SET_EMAIL:
      return{
        ...state,
        email: action.payload.email,
      };
    case SET_LOGGED_OUT:
      return{
        ...state,
        validating: false,
        username: '',
        loggedIn: false
      };
    default:
      return state;
  }
}
