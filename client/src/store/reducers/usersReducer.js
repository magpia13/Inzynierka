import { USERS_LIST_RECEIVED } from '../actions/userAction';

export default function(state = [], action) {
  switch (action.type) {
    case USERS_LIST_RECEIVED:
      return action.users.data;
    default:
      return state;
  }
}
  