import React, { Component } from 'react';
import Form from 'components/common/form/Form';  

class ChatDetail extends Component {

	render() {
		const {formData,onChange,action} = this.props;
		return (

			<div>
			<Form
			formData={formData} 
			onChange={onChange}  
			schema={[
				{name:'chatMsg', path:'chatMsg'}, 
				{name:'msgBy', path:'msgBy'},
				]} 
				/>
				<button onClick={()=>{action()}}>send</button>
				</div>
				);
	} 
}

export default (ChatDetail);
