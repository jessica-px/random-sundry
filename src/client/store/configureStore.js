import {createStore, combineReducers, applyMiddleware} from 'redux';
import authReducer from '../reducers/authReducer';
import thunk from 'redux-thunk';

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer
    }), 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk),
  );
  
  return store;
}