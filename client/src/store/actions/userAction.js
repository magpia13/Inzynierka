import axios from 'axios';

export const USER_RECEIVED = 'USER_RECEIVED';

export const userReceivedAction = (user) => {
  return {
    type: USER_RECEIVED,
    user
  };
}


export const getCurrentUser = () => dispatch => {
  axios.get('/api/users/current/')
  .then(e => dispatch(userReceivedAction(e)))
  .catch(err => console.log(err))
}

export default {
  getCurrentUser
}
