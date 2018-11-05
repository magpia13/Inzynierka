import axios from 'axios';

export const USER_RECEIVED = 'USER_RECEIVED';
export const USERS_LIST_RECEIVED = 'USERS_LIST_RECEIVED';

export const userReceivedAction = (currentUser) => {
  return {
    type: USER_RECEIVED,
    currentUser
  };
}


export const usersListReceivedAction = (users) => {
  return {
    type: USERS_LIST_RECEIVED,
    users:users
  };
}

export const getCurrentUser  = () => dispatch => {
  axios.get('/api/users/current/')
  .then(e => dispatch(userReceivedAction(e)))
  .catch(err => console.log(err))
}

export const getUsersList = () => dispatch => {
  axios.get('/api/users/usersList/')
  .then(e => dispatch(usersListReceivedAction(e)))
  .catch(err => console.log(err))
}

export default {
  getCurrentUser,
  getUsersList 
}
  