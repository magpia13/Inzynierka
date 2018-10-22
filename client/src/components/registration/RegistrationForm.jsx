import React, { Component } from 'react';
import Form from 'components/common/form/Form';  
 
class RegistrationForm extends Component {


	render() { 

		const {t, formData, onChange, action} = this.props;

		return (
			<div className="mt-30 mb-30 panel panel-default">
				<div className="outer"> 

					<Form
					formData={formData} 
					onChange={onChange}  
					schema={[
						{name:'name', path:'name'},
						{name:'email', path:'email', type:'email'}, 
						{name:'password', path:'password', type:'password'},
						{name:'password2', path:'password2', type:'password'},

						
						]} 
						/>
						<button onClick={()=>{action()}}> {'register'} </button>
					</div>
				</div> 
			);  
	}
}

export default RegistrationForm;
