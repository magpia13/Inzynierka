import React, { Component } from 'react';
import Form from 'components/common/form/Form';  
 
class LoginForm extends Component {


	render() { 

		const {t, formData, onChange, action,errors} = this.props;
		console.log(errors);
		return (
			<div className="mt-30 mb-30 panel panel-default">
				<div className="outer"> 

					<Form
					formData={formData} 
					onChange={onChange}  
					schema={[
						{name:'email', path:'email', type:'email'}, 
						{name:'password', path:'password', type:'password'},
						
						]} 
						/>
						<button onClick={()=>{action()}}> {'register'} </button>
					</div>
				</div> 
			);  
	}
}

export default LoginForm;
