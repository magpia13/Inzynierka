import { MESSAGES_RECEIVED } from '../actions/chatAction';
import { ADD_MESSAGE } from '../actions/chatAction';

export default function(state = [], action) {
  switch (action.type) {
 //  	case ADD_MESSAGE:
	// return Object.assign({}, state, {
 //        messages: [{
 //          text: action.messages.text,
 //          id:action.messages._id
    
 //        }, ...state.messages]
 //      })

    case MESSAGES_RECEIVED:
    console.log(state);
      return action.messages

    default:
      return state;
  }
}
     