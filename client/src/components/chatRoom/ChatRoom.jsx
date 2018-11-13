import React, { Component } from 'react';
import Form from 'components/common/form/Form';  
import { Link } from "react-router-dom";
import { withRouter } from 'react-router';


class ChatRoom extends Component {

	render() {
	const {formData,onChange,action,chatRooms,messages,createChannel,channels,changeChannel,activeChannel} = this.props;
	console.log(messages);
		return (
		<div>
			<div className="col-md-4">
				<Form
				formData={formData} 
				onChange={onChange}  
				schema={[
				{name:'roomName', path:'roomName'}, 
				]} 
				/>
				<button onClick={()=>{createChannel()}}>add</button>
				{channels.map(el => <div style={activeChannel===el._id ? {fontWeight:'700'} : {}} 
					onClick={()=>{changeChannel(el)}}><span style={{cursor:'pointer'}}>{el.name}</span></div>)}
			</div>
			<div className="col-md-8">
			{(messages||[]).map(el => <div>{`${el.user.name} ${el.text}`}</div>)}
				<Form
				formData={formData} 
				onChange={onChange}  
				schema={[
				{name:'text', path:'text'}, 
				]} 
				/>
				<button onClick={()=>{action()}}>send</button>
			</div>
		</div>
		);
	} 
}

export default withRouter(ChatRoom);
