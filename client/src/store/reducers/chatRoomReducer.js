import { CHAT_ROOMS_RECEIVED } from '../actions/chatAction';

export default function(state = [], action) {
  switch (action.type) {
    case CHAT_ROOMS_RECEIVED:
      return action.chatRooms
    default:
      return state;
  }
}
 