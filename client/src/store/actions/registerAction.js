import axios from 'axios';
import errorAction from './errorAction';

export const REGISTRATION_RECEIVED = 'REGISTRATION_RECEIVED';

export const registerReceivedAction = () => {
  return {
    type: REGISTRATION_RECEIVED,
  };
}


export default (r) => dispatch => {
  console.log(r);
  axios.post('/api/users/register/', {
    name:r.name,
    password:r.password,
    password2:r.password2,
    email:r.email
  })
  .then(e => console.log(e))
  .catch(err => dispatch(errorAction(err.response.data)))
}