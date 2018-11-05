import React, { Component } from 'react';
import ProfileContainer from 'components/profile/ProfileContainer';

class ProfilePage extends Component {

  render() {
    return (
        <ProfileContainer userId={this.props.location.state.id} />
    );
  } 
}

export default ProfilePage;
    