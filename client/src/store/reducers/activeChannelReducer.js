import { CHANGE_CHANNEL } from '../actions/channelAction';



export default function activeChannel(state = {}, action) {
  switch (action.type) {
  case CHANGE_CHANNEL:
    return {
      name: action.channel.name,
      id: action.channel._id
    };

  default:
    return state;
  }
}
