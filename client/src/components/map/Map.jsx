import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap,MarkerWithLabel,Marker,InfoWindow,FaAnchor } from "react-google-maps";
import { SearchBox } from "react-google-maps/lib/components/places/SearchBox";
import { withRouter } from 'react-router';


const Map = withScriptjs(withGoogleMap((props) =>{
  const INPUT_STYLE = {
    boxSizing: `border-box`,
    MozBoxSizing: `border-box`,
    border: `1px solid transparent`,
    width: `240px`,
    height: `32px`,
    marginTop: `27px`,
    padding: `0 12px`,
    borderRadius: `1px`,
    boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
    fontSize: `14px`,
    outline: `none`,
    textOverflow: `ellipses`,
  };

  return (
    <GoogleMap
    defaultZoom={14}
    center={props.center}
    >
    <SearchBox
    ref={props.onSearchBoxMounted}
    bounds={props.bounds}
    controlPosition={window.google.maps.ControlPosition.TOP_LEFT}
    onPlacesChanged={props.onPlacesChanged}
    inputPlaceholder="Customized your placeholder"
    inputStyle={INPUT_STYLE}
    >
    <input
    type="text"
    placeholder="Find Place"
    style={{
      boxSizing: `border-box`,
      border: `1px solid transparent`,
      width: `240px`,
      height: `32px`,
      marginTop: `27px`,
      padding: `0 12px`,
      borderRadius: `3px`,
      boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
      fontSize: `14px`,
      outline: `none`,
      textOverflow: `ellipses`,
    }}
    />
    </SearchBox>
    {props.locations!==undefined ? props.locations.map((e,i) => <Marker
      onClick={()=>props.click(i)}
      position={{lat: Number(props.locations[i][0]), lng:  Number(props.locations[i][1])}} 
      >
      {props.displayInfo!==undefined && props.displayInfo===i ? <InfoWindow >
        <span style={{cursor:'pointer'}} onClick={()=>props.redirectToProfile(props.locations[i][2].name,props.locations[i][2]._id)}>{props.locations[i][2].name}</span></InfoWindow> : null}
        </Marker> ) : <Marker
        ref={props.onMarkerMounted} onPositionChanged={props.onPositionChanged}
        position={props.center} 
      >
    </Marker>}
    </GoogleMap>
    );
}
))

export default Map; 