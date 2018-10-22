import {ERROR_RECEIVED} from '../actions/errorAction';
import humps from 'humps';

export default (state = [], action) => {
  switch (action.type) {
    case ERROR_RECEIVED:
      return humps.camelizeKeys(action.error);
    default:
      return state;
  }
}
  