import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import errorReducer from './reducers/errorReducer';
import loginReducer from './reducers/loginReducer';
import currentUserReducer from './reducers/currentUserReducer';

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
	token:null,
  user:{}
}

export const store = createStore(
  persistReducer(persistConfig,stackReducers(
    combineReducers({
      error:errorReducer,
      token:loginReducer,
      user:currentUserReducer

    }),
    )),
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk)
  ));

export const persistor = persistStore(store);
