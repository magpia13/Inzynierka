import React, { Component } from 'react';
import ChatRoomContainer from 'components/chatRoom/ChatRoomContainer';

class ChatPage extends Component {

  render() {
    return (
        <ChatRoomContainer location={this.props.location} />
    );
  } 
}

export default ChatPage;
    