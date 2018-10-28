import React, { Component } from 'react';
import TopBarContainer from 'components/topBar/TopBarContainer'

class UserPage extends Component {
  render() {
    return (
      <div className="userPage" style={{padding:'0px'}}>
        <TopBarContainer/>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
            <div className="content-holder">
              {this.props.children}
              </div>
            </div>
          </div> 
        </div>
      </div>
    );
  } 
}

export default UserPage;
 