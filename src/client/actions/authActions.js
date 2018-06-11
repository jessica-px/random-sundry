
export const VALIDATE_TOKEN_BEGIN = 'VALIDATE_TOKEN_BEGIN';
export const VALIDATE_TOKEN_SUCCESS = 'VALIDATE_TOKEN_SUCCESS';
export const VALIDATE_TOKEN_ERROR = 'VALIDATE_TOKEN_ERROR';
export const SET_USERNAME = 'SET_USERNAME';

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

export function validateToken() {
  return dispatch => {
    dispatch(validateTokenBegin());
    return fetch("/auth", {credentials: 'include'})
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(validateTokenSuccess(json.username));
        console.log(json.username)
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