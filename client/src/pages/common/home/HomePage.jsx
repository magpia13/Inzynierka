import React, { Component, Fragment } from 'react';
import HomeContainer from 'components/home/HomeContainer';
import TopBarContainer from 'components/topBar/TopBarContainer'
import { Link } from 'react-router-dom';

class HomePage extends Component {

	render() {
    const {match} = this.props;
		return (
			<Fragment>
				<Link to={`/login`}>Login</Link>
				<Link to={`registration`}>Register</Link>
				<HomeContainer action={(this.props.location.state||{}).action} />
			</Fragment>
		);
	} 
}

export default HomePage;
