import React, { Component, Fragment } from 'react';
import MapContainer from 'components/map/MapContainer';


class Home extends Component { 
  render() { 
    const {...rest} = this.props; 
    return (
      <MapContainer {...rest} />
     );
  } 
}


export default Home; 