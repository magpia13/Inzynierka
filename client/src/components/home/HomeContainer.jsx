import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Home from './Home';
import userAction from 'store/actions/userAction';


class HomeContainer extends Component { 
	constructor (props) {
		super(props)
		this.state = {
		} 
	};    

	componentDidMount(){
				this.props.getCurrentUser();
	}


	render() {

		return (
			<Fragment>
				<Home />
			</Fragment>
			);
	}
}

function mapStateToProps (state) {
  return {
    token: state.token,
  }
}


function mapDispatchToProps(dispatch) {
	return {
		getCurrentUser: () => dispatch(userAction.getCurrentUser())
	}
}

export default (connect(mapStateToProps, mapDispatchToProps)(HomeContainer));
 