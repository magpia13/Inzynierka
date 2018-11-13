import React, { Component, Fragment } from 'react';
import MapContainer from 'components/map/MapContainer';
import { Link, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';


class Home extends Component { 
  render() { 
    const {openChat,currentUser,match,...rest} = this.props; 
    return (
    	<Fragment >
      		<MapContainer {...rest} />
      	</Fragment>
     );
  } 
}


export default withRouter(Home); 