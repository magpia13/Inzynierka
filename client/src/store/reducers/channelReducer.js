import { CHANNELS_RECEIVED } from '../actions/channelAction';

export default function(state = [], action) {
  switch (action.type) {
    case CHANNELS_RECEIVED:
    console.log(state);
      return action.channels.data
    default:
      return state;
  }
}
 