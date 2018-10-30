import { REGISTRATION_RECEIVED } from '../actions/registerAction';

export default function(state = null, action) {
  switch (action.type) {
    case REGISTRATION_RECEIVED:
      return action.registartionAction
    default:
      return state;
  }
}
  