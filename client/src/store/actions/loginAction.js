import axios from 'axios';
import errorAction from './errorAction';

export const TOKEN_RECEIVED = 'TOKEN_RECEIVED';

export const tokenReceived = (token) => {
  console.log(token);
  return {
    type: TOKEN_RECEIVED,
    token:token
  };
}


export default (r) => dispatch => {
  console.log(r);
  axios.post('/api/users/login/', {
    password:r.password,
    email:r.email
  })
  .then(e =>dispatch(tokenReceived(e.data.token)))
  .catch(err => dispatch(errorAction(err)))
}   