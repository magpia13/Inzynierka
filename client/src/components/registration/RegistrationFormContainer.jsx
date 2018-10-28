import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import RegistrationForm from './RegistrationForm';
import registerAction from 'store/actions/registerAction';
import { withRouter } from 'react-router'

class RegistrationFormContainer extends Component { 
	constructor (props) {
		super(props)
		this.state = {
			name: '',
			email: '', 
			password: '',
			password2:'',
			zoom: 13,
			maptype: 'roadmap',
			place_formatted: '',
			place_id: '',
			location: '',

		} 
	};    

	componentDidMount() {
		let map = new window.google.maps.Map(document.getElementById('map'), {
			center: {lat: 50.29449229999999, lng: 18.67138019999993},
			zoom: 13,
			mapTypeId: 'roadmap',
		});
		map.addListener('zoom_changed', () => {
			this.setState({
				zoom: map.getZoom(),
			});
		});

		map.addListener('maptypeid_changed', () => {
			this.setState({
				maptype: map.getMapTypeId(),
			});
		});

		let marker = new window.google.maps.Marker({
			map: map,
			position: {lat: 50.29449229999999, lng: 18.67138019999993},
		});
		let inputNode = document.getElementById('pac-input');
		map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(inputNode);
		let autoComplete = new window.google.maps.places.Autocomplete(inputNode);

		autoComplete.addListener('place_changed', () => {
			let place = autoComplete.getPlace();
			let location = place.geometry.location;

			this.setState({
				place_formatted: place.formatted_address,
				place_id: place.place_id,
				location: location.toString(),
			});

			map.fitBounds(place.geometry.viewport);
			map.setCenter(location);

			marker.setPlace({
				placeId: place.place_id,
				location: location,
			});
		});
	}
	register = () => {
		this.props.registerAction(this.state,this.props.history);

	}

	render() {
 
		return (
			<Fragment>
				<RegistrationForm 
				formData={this.state} 
				onChange={v=>this.setState(v)} 
				action={this.register} />
					<div>{this.state.location}</div> 

				<div id='pac-container'>
					<input id='pac-input' type='text' placeholder='Enter a location' />
				</div>
				<div style={{height:'200px'}} id='map' />
			</Fragment>
			);
	}
}


function mapDispatchToProps(dispatch) {
	return {
		registerAction: (registrationInfo,history) => dispatch(registerAction(registrationInfo,history))
	}
}

export default withRouter(connect(null, mapDispatchToProps)(RegistrationFormContainer));
