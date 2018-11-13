import React, { Component } from 'react';
import Form from 'components/common/form/Form';  

class LoginForm extends Component {


	render() { 

	const {t, formData, onChange, action,errors} = this.props;
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
				<div onClick={()=>onChange({email:'qq@q.pl', password:'qq'})}>qq</div>
				<div onClick={()=>onChange({email:'w@w.pl', password:'ww'})}>ww</div>	
				<button onClick={()=>{action()}}> {'register'} </button>
			</div>
		</div> 
		);  	
	}
}

export default LoginForm;
