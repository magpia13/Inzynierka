import {TOKEN_RECEIVED} from '../actions/loginAction';
import humps from 'humps';

export default (state = null, action) => {
  switch (action.type) {
    case TOKEN_RECEIVED:
      return humps.camelizeKeys(action.token);
    default:
      return state;
  }
}
  