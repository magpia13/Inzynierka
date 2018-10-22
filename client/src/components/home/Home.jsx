import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class Home extends Component { 
	constructor (props) {
		super(props)
		this.state = {
		} 
	};    



	render() {

		return (
			<Fragment>
				<Link to={`/login`}>Login</Link>
				<Link to={`registration`}>Register</Link>
			</Fragment>
			);
	}
}

export default withRouter(Home);
