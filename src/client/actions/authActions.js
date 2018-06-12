
export const VALIDATE_TOKEN_BEGIN = 'VALIDATE_TOKEN_BEGIN';
export const VALIDATE_TOKEN_SUCCESS = 'VALIDATE_TOKEN_SUCCESS';
export const VALIDATE_TOKEN_ERROR = 'VALIDATE_TOKEN_ERROR';
export const NO_TOKEN_FOUND = 'NO_TOKEN_FOUND';
export const SET_USERNAME = 'SET_USERNAME';
export const SET_LOGGED_OUT = 'SET_LOGGED_OUT';

export const setUsername = ( username) => ({
  type: SET_USERNAME,
  payload: { username }
})

export const validateTokenBegin = () => ({
  type: VALIDATE_TOKEN_BEGIN
})

export const validateTokenSuccess = ( username ) => ({
  type: VALIDATE_TOKEN_SUCCESS,
  payload: { username }
})

export const validateTokenFailure = (error) => ({
  type: VALIDATE_TOKEN_ERROR,
  payload: { error}
})

export const noTokenFound = () => ({
  type: NO_TOKEN_FOUND
})

export const setLoggedOut = () => ({
  type: SET_LOGGED_OUT
})

export function validateToken() {
  return dispatch => {
    dispatch(validateTokenBegin());
    return fetch("/auth/validate", {credentials: 'include'})
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        // If no token was found, set state to 'logged out'
        if (json.username == ''){
          console.log('No token found: not logged in.')
          dispatch(noTokenFound());
        }
        // Else store username in state
        else{
          console.log('Token found: logged in as ' + json.username +'.')
          dispatch(validateTokenSuccess(json.username));
        }
        return json.username;
      })
      .catch(error => dispatch(validateTokenFailure(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}