import isEmpty from '../../validation/isEmpty';

import { SET_CURRENT_USER,LOGOUT } from '../actions/loginAction';


export default function(state = [], action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return [...state,action.user]
         case LOGOUT:
      return action.user
    default:
      return state;
  }
}
 