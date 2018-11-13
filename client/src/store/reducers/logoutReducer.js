import { LOGOUT } from '../actions/logoutAction';
import { initialState } from '../store';

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
}
  