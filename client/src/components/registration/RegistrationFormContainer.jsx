import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import RegistrationForm from './RegistrationForm';
import registerAction from 'store/actions/registerAction';
import { withRouter } from 'react-router'
import { Redirect } from 'react-router-dom';
import MapContainer from 'components/map/MapContainer';

class RegistrationFormContainer extends Component { 
	constructor (props) {
		super(props)
		this.state = {
			name: '',
			email: '', 
			password: '',
			password2:'',
			redirect:false,
			lat:'',
			lng:''

		} 
	};     

	setLocation = (lat,lng) => {
		this.setState({location:`(${Number(lat)},${Number(lng)})`});
	}
	register = () => {
		    const actionId =  Math.random();

		this.props.registerAction(this.state,this.props.history,actionId);

	}
	componentDidUpdate(prevProps) {
		if (prevProps.registartionAction !== this.props.registartionAction) {
			this.setState({redirect:true})
	 
		}
	}
	render() {
 	console.log(this.state.location);
		return (
			<Fragment>
			{this.state.redirect===true?<Redirect to='/' />:null}
				<RegistrationForm 
				formData={this.state} 
				onChange={v=>this.setState(v)} 
				action={this.register} />
				<div>{this.state.location}</div> 
      			<MapContainer setLocation={this.setLocation} />
			</Fragment>
			);
	}
}
function mapStateToProps (state) {
  return {
    registartionAction:state.registartionAction
  }
}


function mapDispatchToProps(dispatch) {
	return {
		registerAction: (registrationInfo,history,actionId) => dispatch(registerAction(registrationInfo,history,actionId))
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegistrationFormContainer));
