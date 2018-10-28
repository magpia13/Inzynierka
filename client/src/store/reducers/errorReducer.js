import {ERROR_RECEIVED} from '../actions/errorAction';
import humps from 'humps';

export default (state = [], action) => {
  switch (action.type) {
    case ERROR_RECEIVED:
    const error =  humps.camelizeKeys(action.error)
      return {...state,error};
    default:
      return state;
  }
}
   