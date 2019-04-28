import React from 'react';
import {connect} from '../common/fluxy';

const Profile = ({username, age}) => {
	console.count('Profile');

	return (
		<div className="profile">
			You're logged in as {username} and you have {age} years old.
		</div>
	);
}

const mapStateToProps = ({user}) => {
	return {
		username: user.username,
		age: user.age
	}
};

export default connect(mapStateToProps)(Profile);