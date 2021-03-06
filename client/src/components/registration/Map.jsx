import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import RegistrationForm from './RegistrationForm';
import registerAction from 'store/actions/registerAction';
import { withRouter } from 'react-router'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class RegistrationFormContainer extends Component { 
	constructor() {
  super();
  this.state = {
    zoom: 13,
  maptype: 'roadmap',
  place_formatted: '',
  place_id: '',
  place_location: '',
  }
}
  componentDidMount() {
    let map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: -33.8688, lng: 151.2195},
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
  position: {lat: -33.8688, lng: 151.2195},
});

// initialize the autocomplete functionality using the #pac-input input box
let inputNode = document.getElementById('pac-input');
map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(inputNode);
let autoComplete = new window.google.maps.places.Autocomplete(inputNode);

autoComplete.addListener('place_changed', () => {
  let place = autoComplete.getPlace();
  let location = place.geometry.location;

  this.setState({
    place_formatted: place.formatted_address,
    place_id: place.place_id,
    place_location: location.toString(),
  });

  // bring the selected place in view on the map
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
      <div id='app'>
      <div id='pac-container'>
  <input id='pac-input' type='text' placeholder='Enter a location' />
</div>
        <div style={{height:'200px'}} id='map' />
      </div>
    );
  }
};

export default  withRouter(connect(null, null)(RegistrationFormContainer));
 
// export default  withRouter(GoogleApiWrapper({
//   apiKey: 'AIzaSyBj4blO0jFHddFGpPJA6bnFPw_QWpBL12U'
// })(connect(null, mapDispatchToProps)(RegistrationFormContainer)))