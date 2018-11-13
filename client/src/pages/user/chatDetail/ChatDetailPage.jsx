import React, { Component } from 'react';
import ChatDetailContainer from 'components/chatDetail/ChatDetailContainer';

class ChatDetailPage extends Component {

  render() {
    return (
        <ChatDetailContainer chatId={this.props.match.params.chatListId}/>
    );
  } 
}

export default ChatDetailPage;
    