import React, { Component } from 'react';

class Profile extends Component {
  render() {
  		const {user} = this.props;

    return (
    	<div>
    		
    		{user.books ? user.books.map(el => <div>
					<div>title:{el.title}</div>
					<div>description:{el.description}</div>

					<img style={{width:'200px'}} src={`http://localhost:5000/api/books/${(el.image||{}).filename}`}  />
					</div>
					) : null}
    	</div>
    );
  } 
}

export default Profile;
    