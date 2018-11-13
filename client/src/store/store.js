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
import booksReducer from './reducers/booksReducer';
import bookReducer from './reducers/bookReducer';
import chatRoomReducer from './reducers/chatRoomReducer';
import messagesReducer from './reducers/messagesReducer';
import messageReducer from './reducers/messageReducer';
import socketIdReducer from './reducers/socketIdReducer';
import channelReducer from './reducers/channelReducer';
import activeChannelReducer from './reducers/activeChannelReducer';
import tokenReducer from './reducers/tokenReducer';

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
  token:null,
	error:[],
	user:[],
  currentUser:{},
  users:[],
  registartionAction:null,
  books:[],
  book:null,
  chatRooms:[],
  messages:[],
  message:{},
  socketID:null,
  channels:[],
  activeChannel:{}
}

export const store = createStore(
  persistReducer(persistConfig,stackReducers(
    combineReducers({
      error:errorReducer,
      user:loginReducer,
      currentUser:userReducer,
      users:usersReducer,
      registartionAction:registrationReducer,
      books:booksReducer,
      book:bookReducer,
      chatRooms:chatRoomReducer,
      messages:messagesReducer,
      message:messageReducer,
      socketID: socketIdReducer,
      channels:channelReducer,
      activeChannel:activeChannelReducer,
      token:tokenReducer


    }),
    )),
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk)
  ));

export const persistor = persistStore(store);
