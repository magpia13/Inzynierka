import {USER_RECEIVED} from '../actions/userAction';
import humps from 'humps';

export default (state = {}, action) => {
  switch (action.type) {
    case USER_RECEIVED:
      return humps.camelizeKeys(action.user);
    default:
      return state;
  }
}
  