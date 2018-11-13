import React, { Component } from 'react';
import ChatDetail from './ChatDetail';
import { connect } from 'react-redux';
import chatAction from 'store/actions/chatAction';

class ChatDetailContainer extends Component {
		constructor (props) {
		super(props)
		this.state = {
			chatMsg:'',
			msgBy:''
		} 
	};    

	sendMsg = () => {
		this.props.sendMsg(this.state,this.props.chatId)
	}
  render() {
    return (
        <ChatDetail formData={this.state} 
				onChange={v=>this.setState(v)} action={this.sendMsg} />
    );
  } 
}
function mapStateToProps (state,ownProps) {
	return {
	}
}


function mapDispatchToProps(dispatch) {
	return {
	
		sendMsg: (data,chatId) => dispatch(chatAction.sendMsg(data,chatId))
	} 
}
export default connect(mapStateToProps, mapDispatchToProps)(ChatDetailContainer);
     