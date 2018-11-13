import axios from 'axios';
import errorAction from './errorAction';
import {getCurrentUser} from './userAction';
import setToken from '../../utils/setToken';
import jwt_decode from 'jwt-decode';
export const CHANNELS_RECEIVED = 'CHANNELS_RECEIVED';
export const CHANGE_CHANNEL = 'CHANGE_CHANNEL';

export const channelsReceivedAction = (channels) => {
  return {
    type: CHANNELS_RECEIVED,
    channels
  };
}

export function changeChannel(channel) {
  return {
    type: CHANGE_CHANNEL,
    channel
  };
}

export const createChannel  = (channel) => dispatch => {
  axios.post('/api/channel/new_channel',{name:channel})
  .then(e => dispatch(getChannels()))
  .catch(err => console.log(err))
}

export const getChannels  = () => dispatch => {
  axios.get('/api/channel/list')
  .then(e => dispatch(channelsReceivedAction(e)))
  .catch(err => console.log(err))
}
export default {
createChannel,
getChannels,
changeChannel
} 