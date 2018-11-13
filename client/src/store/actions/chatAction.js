import axios from 'axios';

export const CHAT_ROOMS_RECEIVED = 'CHAT_ROOMS_RECEIVED';
export const MESSAGES_RECEIVED = 'MESSAGES_RECEIVED';
export const MESSAGE_RECEIVED = 'MESSAGE_RECEIVED';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const RECEIVE_SOCKET = 'RECEIVE_SOCKET';

export const chatRoomsReceivedAction = (chatRooms) => {
  return {
    type: CHAT_ROOMS_RECEIVED,
    chatRooms:chatRooms
  };
}
export const messagesReceivedAction = (messages) => {
  console.log(messages.data);
  return {
    type: MESSAGES_RECEIVED,
    messages:messages.data
  };
}
export const addMessageAction = (messages) => {
  return {
    type: ADD_MESSAGE,
    messages:messages.data
  };
}
// export const getMessage  = (messages)  => {
//    return {
//     type: MESSAGE_RECEIVED,
//     messages:messages
//   };
// }  

export const receiveSocket = (socketID) =>{
  console.log(socketID);
  return {
    type: RECEIVE_SOCKET,
    socketID
  } 
}

export const getChatRoomsList  = () => dispatch => {
  axios.get('/api/chats/list/')
  .then(e => dispatch(chatRoomsReceivedAction(e)))
  .catch(err => console.log(err))
}  


export const createRoom  = (roomName) => dispatch => {
  axios.post('/api/chats/create/',{roomName})
  .then(e => dispatch(getChatRoomsList()))
  .catch(err => console.log(err))
}

export const getChatDetails  = (chatId) => dispatch => {
  axios.post('/chats/detail/'+chatId)
  .then(e => console.log(e))
  .catch(err => console.log(err))
}

export const sendMsg  = (r,chatId) => dispatch => {
  console.log(r,chatId);
  axios.post('/api/chats/newmessage', r)
  .then(e => dispatch(addMessageAction(e)))
  .catch(err => console.log(err))
}

export const getMessages  = (channelId) => dispatch => {
  axios.get('/api/chats/messages/'+channelId)
  .then(e => dispatch(messagesReceivedAction(e)))
  .catch(err => console.log(err))
}


export default {
createRoom,
getChatRoomsList,
getChatDetails,
sendMsg,
getMessages,
receiveSocket
}
    