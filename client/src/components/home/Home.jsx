import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class Home extends Component { 
	constructor (props) {
		super(props)
		this.state = {
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

		let locations = this.props.locations;

		let contentString = <div id="content">ll</div>;
		let infowindow = new window.google.maps.InfoWindow({
			content: contentString
		});
		let markers= [];


		let marker,i;
		let markerCollections = [];
		let objeto_infowindow = [];
		for (i = 0; i < locations.length; i++) { 
			console.log(locations[i][0]);
			marker = new window.google.maps.Marker({
				position: new window.google.maps.LatLng(Number(locations[i][0]), Number(locations[i][1])),
				map: map,
				title:1
			});
			objeto_infowindow['infowindow' + i] = new window.google.maps.InfoWindow({
				content: `${i}`
			});
			let onclick = function(objeto_infowindow,marker){
				let obj = objeto_infowindow;
				return function(){
					obj.open(map,marker);
				}
			}
			window.google.maps.event.addListener(marker, 'click', onclick(objeto_infowindow['infowindow' + i], marker) );
			markerCollections.push(marker);

		}

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
	render() {

		return (
			<Fragment>
				<div>{this.state.location}</div> 
					<div id='pac-container'>
						<input id='pac-input' type='text' placeholder='Enter a location' />
					</div>
				<div style={{height:'500px'}} id='map' />
			</Fragment>
		);
	}
}

export default withRouter(Home);
