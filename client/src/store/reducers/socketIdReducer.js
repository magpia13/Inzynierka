import { RECEIVE_SOCKET } from '../actions/chatAction';

export default function(state = null, action) {
  switch (action.type) {
    case RECEIVE_SOCKET:
      return action.socketID
    default:
      return state;
  }
}
 