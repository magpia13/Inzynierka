import React, { Component } from 'react';
import HomeContainer from 'components/home/HomeContainer';

class HomePage extends Component {

  render() {
  	console.log((this.props.location.state||{}).action);
    return (
        <HomeContainer action={(this.props.location.state||{}).action} />
    );
  } 
}

export default HomePage;
    