import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import errorReducer from './reducers/errorReducer';
import loginReducer from './reducers/loginReducer';
import userReducer from './reducers/userReducer';
import usersReducer from './reducers/usersReducer';
import registrationReducer from './reducers/registrationReducer';

const stackReducers = (...reducers) => {
  return (state=[], action) => {
    let newState = state;
    for(const reducer of reducers){
      newState = reducer(newState, action);
    }
    return newState;
  }
}
const persistConfig = {
 key: 'root',
 storage
}

export const initialState = {
	error:[],
	user:null,
  currentUser:{},
  users:[],
  registartionAction:null
}

export const store = createStore(
  persistReducer(persistConfig,stackReducers(
    combineReducers({
      error:errorReducer,
      user:loginReducer,
      currentUser:userReducer,
      users:usersReducer,
      registartionAction:registrationReducer

    }),
    )),
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk)
  ));

export const persistor = persistStore(store);
