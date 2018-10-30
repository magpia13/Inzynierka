import axios from 'axios';
import errorAction from './errorAction';
import {getUsersList} from './userAction';
export const REGISTRATION_RECEIVED = 'REGISTRATION_RECEIVED';

export const registerReceivedAction = (actionId) => {
  return {
    type: REGISTRATION_RECEIVED,
    registartionAction:actionId
  };
}


export default (r,history,actionId) => dispatch => {

  axios.post('/api/users/register/', {
    name:r.name,
    password:r.password,
    password2:r.password2,
    email:r.email,
    userType:'0',
    location:r.location 
  })  
    .then(() => dispatch(registerReceivedAction(actionId)))
  

  .catch(err => dispatch(errorAction(err.response.data)))
}