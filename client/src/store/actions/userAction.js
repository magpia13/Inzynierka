import axios from 'axios';

export const USERS_LIST_RECEIVED = 'USERS_LIST_RECEIVED';



export const usersListReceivedAction = (users) => {
  return {
    type: USERS_LIST_RECEIVED,
    users:users
  };
}



export const getUsersList = () => dispatch => {
  axios.get('/api/users/usersList/')
  .then(e => dispatch(usersListReceivedAction(e)))
  .catch(err => console.log(err))
}

export default {
  getUsersList 
}
  