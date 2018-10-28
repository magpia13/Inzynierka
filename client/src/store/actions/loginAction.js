import axios from 'axios';
import errorAction from './errorAction';
import {getCurrentUser} from './userAction';
import setToken from '../../utils/setToken';
import jwt_decode from 'jwt-decode';

export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export const setCurrentUser = decoded => {
  console.log(decoded);
  return {
    type: SET_CURRENT_USER,
    user: decoded
  };
};

export const logout = () => dispatch => {
  localStorage.removeItem('jwtToken');

  setToken(false);
  dispatch(setCurrentUser({}));

}

export const login = (r,history) => (dispatch) => {
  axios.post('/api/users/login/', {
    password:r.password,
    email:r.email
  })
  .then(res => {
    const { token } = res.data;
    localStorage.setItem('jwtToken', token);
    setToken(token);

    const decoded = jwt_decode(token);
    dispatch(setCurrentUser(decoded));
  }).then(res => history.push('/'))
  .catch(err => dispatch(errorAction(err)))
}   


export default {
  logout,
  login
} 