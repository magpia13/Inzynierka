import { MESSAGE_RECEIVED } from '../actions/chatAction';

export default function(state = null, action) {
  switch (action.type) {
    case MESSAGE_RECEIVED:
      return action.message;
    default:
      return state;
  }
}
  